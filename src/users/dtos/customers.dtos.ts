import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPhoneNumber,
  Length,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
