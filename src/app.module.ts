import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseResolver } from './purchase.resolver';

const schemaFile = 'src/schema.gql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), schemaFile),
      playground: false,
    }),
  ],
  providers: [AppService, PurchaseResolver],
})
export class AppModule {}
