import { IsString } from 'class-validator';

export class CreateIconDto {
  @IsString()
  code: string;

  @IsString()
  symbol: string;
}
