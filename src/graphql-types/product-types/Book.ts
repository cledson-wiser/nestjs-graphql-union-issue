import { Field, ObjectType } from "@nestjs/graphql";
import { CategoryEnum } from "../category.enum";

@ObjectType()
export class Book {
    @Field(() => CategoryEnum)
    category = CategoryEnum.BOOK

    @Field(() => String)
    title: string
}