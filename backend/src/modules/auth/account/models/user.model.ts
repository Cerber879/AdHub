import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserModel {
	@Field(() => ID)
	public id: string

	@Field(() => String, { nullable: true })
	public email: string

	@Field(() => String, { nullable: true })
	public phoneNumber: string

	@Field(() => String)
	public password: string

	@Field(() => String)
	public displayName: string

	@Field(() => String)
	public typeProfile: string

	@Field(() => Float, { nullable: true })
	public rating: number

	@Field(() => String, { nullable: true })
	public avatar: string

	@Field(() => String, { nullable: true })
	public bio: string

    @Field(() => Date)
	public createdAt: Date

	@Field(() => Date)
	public updatedAt: Date
}