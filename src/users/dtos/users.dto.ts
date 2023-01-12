import {
  IsString,
  IsEmail,
  IsNotEmpty,
  Length,
  // IsIn
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 30)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
