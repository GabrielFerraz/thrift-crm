import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSourceDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
