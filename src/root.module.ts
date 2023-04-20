import { Module } from '@nestjs/common';

import { UserController } from './app.controller';
import { UserService } from './user.service';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: []
})
export class RootModule {
  constructor() {
    console.log("App Module")
  }
}
