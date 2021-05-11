import { registerEnumType } from '@nestjs/graphql'

export enum CategoryEnum {
  BOOK = 'BOOK',
  ELETRONICS = 'ELETRONICS'
}

registerEnumType(CategoryEnum, {
  name: 'CategoryEnum',
})
