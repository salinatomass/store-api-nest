import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') id: string) {
    return `Product #${id}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `Este es el producto #${productId} de la categoría #${id}`;
  }
}
