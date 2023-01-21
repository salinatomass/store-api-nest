import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { ProductsService } from 'src/products/services/products.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private productsService: ProductsService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async create(data: CreateUserDto): Promise<User> {
    const newUser = this.userRepo.create(data);
    return await this.userRepo.save(newUser);
  }

  async update(id: number, changes: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    this.userRepo.merge(user, changes);
    return await this.userRepo.save(user);
  }

  async delete(id: number): Promise<User> {
    const user = await this.findOne(id);
    await this.userRepo.delete(id);
    return user;
  }

  async getOrderByUser(id: number): Promise<Order> {
    const user = await this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}
