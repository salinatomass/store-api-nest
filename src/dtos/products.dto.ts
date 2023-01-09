import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

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
  @IsNotEmpty()
  readonly stock: number;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
