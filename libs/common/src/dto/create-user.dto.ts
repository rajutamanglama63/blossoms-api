import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';
import { Catagories } from 'libs/models/catagories.entity';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsArray()
  @IsOptional()
  catagories?: Catagories[];
}
