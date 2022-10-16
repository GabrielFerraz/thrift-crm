import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsDate()
  date: string;

  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  payment_method_id: number;

  @IsNotEmpty()
  @IsNumber()
  total: number;

  @IsNumber()
  discount: number;

  @IsNumber()
  subtotal: number;
}
