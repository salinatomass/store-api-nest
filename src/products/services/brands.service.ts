import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];
  private counterId = this.brands.length;

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) throw new NotFoundException('Brand not found');
    return brand;
  }

  findProducts(id: number) {
    return ['product 1', 'product 2', `product ${id}`];
  }

  create(payload: CreateBrandDto) {
    this.counterId += 1;
    const newBrand = { id: this.counterId, ...payload };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === brand.id);
    this.brands[index] = { ...brand, ...payload };
    return this.brands[index];
  }

  delete(id: number) {
    const brand = this.findOne(id);
    this.brands = this.brands.filter((item) => item.id !== brand.id);
    return brand;
  }
}
