import { Injectable } from '@nestjs/common';

import { Product } from '../entities/product.entity';
('../entities/product.entity');

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 80,
      stock: 10,
      image: 'https://someimage.com/1',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'bla bla',
      price: 50,
      stock: 5,
      image: 'https://someimage.com/1',
    },
  ];

  private counterId = this.products[this.products.length - 1].id;

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

  update(id: number, payload: any) {
    const index = this.products.findIndex((prod) => prod.id === id);
    if (index === -1) return null;
    this.products[index] = { ...this.products[index], ...payload };
    return this.products[index];
  }

  delete(id: number) {
    this.products = this.products.filter((prod) => prod.id !== id);
    return { id };
  }
}
