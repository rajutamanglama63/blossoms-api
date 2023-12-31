import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "libs/models/user.entity";
import { UserLibModule } from "libs/user/src";
import { AuthService } from "./auth.service";

@Module({
    imports: [TypeOrmModule.forFeature([User]), UserLibModule],
    providers: [AuthService],
    exports: [AuthService]
})

export class AuthLibModule {}