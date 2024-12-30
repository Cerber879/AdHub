import { ConfigService } from '@nestjs/config';
import { PrismaService } from './../../../core/prisma/prisma.service';
import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './inputs/login.input';
import { verify } from 'argon2';
import type { Request } from 'express';

@Injectable()
export class SessionService {
    public constructor(private readonly prismaService: PrismaService, private readonly ConfigService: ConfigService) {}

    public async login(req: Request, input: LoginInput) {
        const { login, password } = input

        const user = await this.prismaService.user.findFirst({
            where: {
                OR: [
                    {
                        email: {equals:login}
                    },
                    {
                        phoneNumber: {equals:login}
                    }
                ]
            }
        })

        if(!user) {
            throw new NotFoundException('Пользователь не найден')
        }

        const isPasswordValid = await verify(user.password, password)

        if(!isPasswordValid) {
            throw new UnauthorizedException('Неверный пароль')
        }

        return new Promise((resolve, reject) => {
            req.session.createdAt = new Date()
            req.session.userId = user.id

            req.session.save((err) => {
                if(err) {
                    return reject( 
                        new InternalServerErrorException('Произошла ошибка при сохранении сессии')
                    )
                } else {
                    resolve(user)
                }
            })
        })
    }

    public async logout(req: Request) {
        return new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                if(err) {
                    return reject(
                        new InternalServerErrorException('Не удалось завершить сессию')
                    )
                } else {
                    req.res.clearCookie(this.ConfigService.getOrThrow<string>('SESSION_NAME'))
                    resolve(true)
                }
            })
        })
    }
}
