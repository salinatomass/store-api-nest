import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];
  private counterId = this.categories.length;

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  findProducts(id: number) {
    return ['product 1', 'product 2', `product ${id}`];
  }

  create(payload: CreateCategoryDto) {
    this.counterId += 1;
    const newCategory = { id: this.counterId, ...payload };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const category = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === category.id);
    this.categories[index] = { ...category, ...payload };
    return this.categories[index];
  }

  delete(id: number) {
    const category = this.findOne(id);
    this.categories = this.categories.filter((item) => item.id !== category.id);
    return category;
  }
}
