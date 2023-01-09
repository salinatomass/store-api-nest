import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: 'products',
      limit,
      offset,
      brand,
    };
  }

  @Get(':productId')
  getOne(@Param('productId') id: string) {
    return `Product #${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return { message: 'product created', payload };
  }
}
