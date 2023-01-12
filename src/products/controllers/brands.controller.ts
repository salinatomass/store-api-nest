import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';
import { BrandsService } from '../services/brands.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getCategories() {
    return this.brandsService.findAll();
  }

  @Get('/:id/products/')
  getProductsCategories(@Param('id', ParseIntPipe) categoryId: number) {
    return this.brandsService.findProducts(categoryId);
  }

  @Post()
  createCategory(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Patch(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.delete(id);
  }
}
