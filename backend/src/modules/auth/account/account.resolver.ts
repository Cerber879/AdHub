import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User } from '@/prisma/generated'
import { Authorization } from '@/src/shared/decorators/auth.decorator'
import { Authorized } from '@/src/shared/decorators/authorized.decorator'

import { AccountService } from './account.service'
import { ChangeEmailInput } from './inputs/change-email.input'
import { ChangeDisplayNameInput } from './inputs/change-name.input'
import { ChangePasswordInput } from './inputs/change-password.input'
import { ChangePhoneNumberInput } from './inputs/change-phone.input'
import { CreateUserInput } from './inputs/create-user.input'
import { UserModel } from './models/user.model'

@Resolver('Account')
export class AccountResolver {
  public constructor(private readonly accountService: AccountService) {}

  @Authorization()
  @Query(() => UserModel, { name: 'findProfile' })
  public async me(@Authorized('id') id: string) {
    return this.accountService.me(id)
  }

  @Query(() => UserModel, { name: 'findUser' })
  public async findUserById(@Args('id') id: string) {
    return this.accountService.findUser(id)
  }

  @Mutation(() => Boolean, { name: 'createUser' })
  public async createUser(@Args('data') input: CreateUserInput) {
    return this.accountService.create(input)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'changeDisplayName' })
  public async changeDisplayName(
    @Authorized() user: User,
    @Args('data') input: ChangeDisplayNameInput
  ) {
    return this.accountService.changeDisplayName(user, input)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'changeEmail' })
  public async changeEmail(
    @Authorized() user: User,
    @Args('data') input: ChangeEmailInput
  ) {
    return this.accountService.changeEmail(user, input)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'changePhoneNumber' })
  public async changePhoneNumber(
    @Authorized() user: User,
    @Args('data') input: ChangePhoneNumberInput
  ) {
    return this.accountService.changePhoneNumber(user, input)
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'changePassword' })
  public async changePassword(
    @Authorized() user: User,
    @Args('data') input: ChangePasswordInput
  ) {
    return this.accountService.changePassword(user, input)
  }
}
