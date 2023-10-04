import { Module } from "@nestjs/common";
import { UserLibModule } from "libs/user/src";
import { UserController } from "./user.controller";

@Module({
    imports: [UserLibModule],
    exports: [UserController]
})

export class UserModule {}