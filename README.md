This Repo was created to demonstrate the issue where type definition file (d.ts) for graphql unions have missing types from the original typescript file where the graphql union is created with `createUnionType` function.


### Install
```bash
$ npm install
```
### Build
```bash
$ npm run build
```
### Compare the typescript file where union is created:
```bash
/src/graphql-types/products.union.ts
```
```typescript
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
```

### See that the generated type definition file dont have all types in the resulting typescript union: 
```bash
/dist/graphql-types/products.union.d.ts
```
```typescript
import { Book } from "./product-types/Book";
import { Computer } from "./product-types/Computer";
export declare const ProductUnion: Book | Computer;
```