import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConsignorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
