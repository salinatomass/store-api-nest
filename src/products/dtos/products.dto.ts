import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly stock: number;

  @ApiProperty()
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  categoryId: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  brandId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
