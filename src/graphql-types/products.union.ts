import { createUnionType } from "@nestjs/graphql";
import { Book } from "./product-types/Book";
import { Computer } from "./product-types/Computer";
import { Ebook } from "./product-types/EBook";
import { Magazine } from "./product-types/Magazine";
import { TV } from "./product-types/Tv";

export const ProductUnion = createUnionType({
    name: "ProductUnion",
    types: () => [
        Book,
        Computer,
        TV,
        Magazine,
        Ebook
    ]
})