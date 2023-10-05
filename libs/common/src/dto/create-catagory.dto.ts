import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateCatagoryDto {
  @IsString()
  name: string;

  @IsBoolean()
  isEditable: boolean;

  @IsInt()
  @IsOptional()
  colorId: number;

  @IsInt()
  @IsOptional()
  iconId: number;

  @IsInt()
  @IsOptional()
  userId: number;
}
