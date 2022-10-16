import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsString()
  code: string;

  @IsNumber()
  category_id: number;

  @IsNumber()
  brand_id: number;

  @IsNumber()
  color_id: number;

  @IsNumber()
  size_id: number;

  @IsNumber()
  material_id: number;

  @IsNumber()
  source_id: number;

  @IsNumber()
  consignor_id: number;

  @IsNumber()
  buy_price: number;

  @IsNumber()
  sell_price: number;

  @IsNumber()
  order_id: number;
}
