import {
    Query,
    Resolver,
    Args,
    ResolveField,
    Parent,
    ID,
  } from '@nestjs/graphql';
import { Purchase } from "./graphql-types/Purchase";

@Resolver(() => Purchase)
export class PurchaseResolver {
   
    @Query(() => [Purchase])
    async purchases() {

    }
}