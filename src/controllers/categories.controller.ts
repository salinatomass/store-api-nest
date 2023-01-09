import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories() {
    return 'brands';
  }

  @Get('/:id/products/:productId')
  getProductsCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `Este es el producto #${productId} de la categoría #${id}`;
  }
}
