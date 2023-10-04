import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "libs/models/user.entity";
import { Module } from '@nestjs/common';
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService], 
})

export class UserLibModule {}