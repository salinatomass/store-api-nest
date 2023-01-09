import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  // HttpStatus,
  // HttpCode,
} from '@nestjs/common';

import { ProductService } from '../services/product.service';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  getAll(
    @Query('limit', ParseIntPipe) limit = 10,
    @Query('offset', ParseIntPipe) offset = 0,
    @Query('brand') brand: string,
  ) {
    console.log(limit, offset, brand);
    return this.productService.findAll();
  }

  @Get(':productId')
  // @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productService.create(payload);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
