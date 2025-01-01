import { TypesProfile, TypesProfileType } from './../../../shared/types/types-profile';
import { PrismaService } from './../../../core/prisma/prisma.service';
import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserInput } from './inputs/create-user.input';
import { hash, verify } from 'argon2';
import { User } from '@/prisma/generated';
import { ChangeEmailInput } from './inputs/change-email.input';
import { ChangePasswordInput } from './inputs/change-password.input';
import { ChangePhoneNumberInput } from './inputs/change-email.input copy';

@Injectable()
export class AccountService {
    public constructor(private readonly prismaService: PrismaService) {}

	public async me(id: string) {
		const user = await this.prismaService.user.findUnique({
			where: {
				id
			}
		})

		return user
	}

    public async create(input: CreateUserInput) {
		const { displayName, typeProfile, email, phoneNumber, password } = input

		if (!email && !phoneNumber) {
			throw new BadRequestException('Укажите либо email, либо номер телефона');
		}
	
		if (email) {
			const existingEmail = await this.prismaService.user.findUnique({
				where: { 
					email 
				},
			});
			if (existingEmail) {
				throw new ConflictException('Этот email уже занят');
			}
		}
	
		if (phoneNumber) {
			const existingPhone = await this.prismaService.user.findUnique({
				where: { 
					phoneNumber 
				},
			});
			if (existingPhone) {
				throw new ConflictException('Этот номер телефона уже занят');
			}
		}

		if (typeProfile && !TypesProfile.includes(typeProfile as TypesProfileType)) {
			throw new BadRequestException('Неверный тип профиля');
		}		  

		await this.prismaService.user.create({
			data: {
				displayName: displayName,
				typeProfile: typeProfile,
				email: email,
				phoneNumber: phoneNumber,
				password: await hash(password),
			}
		})

		return true
	}

	public async changeEmail(user: User, input: ChangeEmailInput) {
		const { email } = input

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				email
			}
		})

		return true
	}

	public async changePhoneNumber(user: User, input: ChangePhoneNumberInput) {
		const { phoneNumber } = input

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				phoneNumber
			}
		})

		return true
	}

	public async changePassword(user: User, input: ChangePasswordInput) {
		const { oldPassword, newPassword } = input

		const isValidPassword = await verify(user.password, oldPassword)

		if (!isValidPassword) {
			throw new UnauthorizedException('Неверный старый пароль')
		}

		await this.prismaService.user.update({
			where: {
				id: user.id
			},
			data: {
				password: await hash(newPassword)
			}
		})

		return true
	}
}
