import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  description: string;
}
