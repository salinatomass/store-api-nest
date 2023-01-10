import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
('../entities/product.entity');
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

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

  private counterId = this.products.length;

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === product.id);
    this.products[index] = { ...product, ...payload };
    return this.products[index];
  }

  delete(id: number) {
    this.findOne(id);
    this.products = this.products.filter((prod) => prod.id !== id);
    return { id };
  }
}
