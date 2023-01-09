import { Injectable } from '@nestjs/common';

import { Product } from '../entities/product.entity';
('../entities/product.entity');

@Injectable()
export class ProductService {
  private counterId = 1;

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 80,
      stock: 10,
      image: 'https://someimage.com/1',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((prod) => prod.id === id);
  }

  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, changes: any) {
    const index = this.products.findIndex((prod) => prod.id === id);
    if (index === -1) return this.products[0];
    this.products[index] = { id, ...changes };
    return this.products[index];
  }

  delete(id: number) {
    this.products = this.products.filter((prod) => prod.id !== id);
    return { id };
  }
}
