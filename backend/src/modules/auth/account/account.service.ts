import { TypesProfile, TypesProfileType } from './../../../shared/types/types-profile';
import { PrismaService } from './../../../core/prisma/prisma.service';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './inputs/create-user.input';
import { hash } from 'argon2';

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
				where: { email },
			});
			if (existingEmail) {
				throw new ConflictException('Этот email уже занят');
			}
		}
	
		if (phoneNumber) {
			const existingPhone = await this.prismaService.user.findUnique({
				where: { phoneNumber },
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
}
