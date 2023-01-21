import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(@InjectRepository(Brand) private brandRepo: Repository<Brand>) {}

  async findAll(): Promise<Brand[]> {
    return await this.brandRepo.find();
  }

  async findOne(id: number): Promise<Brand> {
    const brand = await this.brandRepo.findOne({
      where: { id },
    });
    if (!brand) throw new NotFoundException('Brand not found');
    return brand;
  }

  // findProducts(id: number): Promise<Brand> {
  //   return ['product 1', 'product 2', `product ${id}`];
  // }

  async create(data: CreateBrandDto): Promise<Brand> {
    const brand = this.brandRepo.create(data);
    return await this.brandRepo.save(brand);
  }

  async update(id: number, changes: UpdateBrandDto): Promise<Brand> {
    const brand = await this.findOne(id);
    this.brandRepo.merge(brand, changes);
    return await this.brandRepo.save(brand);
  }

  async delete(id: number): Promise<Brand> {
    const brand = await this.findOne(id);
    await this.brandRepo.delete(brand.id);
    return brand;
  }
}
