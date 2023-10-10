import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsInt()
  catagoryId: number;

  @IsInt()
  userId: number;
}
