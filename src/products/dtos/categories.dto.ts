import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
