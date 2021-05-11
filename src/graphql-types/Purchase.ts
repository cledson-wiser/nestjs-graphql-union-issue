import { Field, ObjectType } from "@nestjs/graphql";
import { ProductUnion } from "./products.union";

@ObjectType()
export class Purchase {
    @Field(() => Date)
    date: Date

    @Field( () => [ProductUnion])
    products: typeof ProductUnion[]
}