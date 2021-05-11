import { Field, ObjectType } from "@nestjs/graphql";
import { CategoryEnum } from "../category.enum";

@ObjectType()
export class TV {
    @Field(() => CategoryEnum)
    category = CategoryEnum.ELETRONICS

    @Field(() => String)
    brand: string
}