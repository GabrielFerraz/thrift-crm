import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAdjustmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  cost: number;
}
