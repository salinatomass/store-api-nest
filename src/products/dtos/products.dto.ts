import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly stock: number;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  categoryId: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  brandId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
