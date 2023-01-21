import { IsString, IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  @ApiProperty()
  phone: number;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
