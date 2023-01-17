import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  async getOne(@Param('productId', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // @Post()
  // create(@Body() payload: CreateProductDto) {
  //   return this.productsService.create(payload);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() payload: UpdateProductDto,
  // ) {
  //   return this.productsService.update(id, payload);
  // }

  // @Delete(':id')
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return this.productsService.delete(id);
  // }
}
