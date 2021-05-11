import { Field, ObjectType } from "@nestjs/graphql";
import { CategoryEnum } from "../category.enum";

@ObjectType()
export class Magazine {
    @Field(() => CategoryEnum)
    category = CategoryEnum.BOOK

    @Field(() => String)
    title: string
}