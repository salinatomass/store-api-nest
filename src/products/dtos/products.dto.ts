import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly price: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly stock: number;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

  // @ApiProperty()
  // @IsPositive()
  // @IsNotEmpty()
  // categoryId: number;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  brandId: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
