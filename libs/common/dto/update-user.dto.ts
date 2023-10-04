import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsString } from 'class-validator';
import { CreateUserDto } from "./create-user.dto";

export class updateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    password: string
}