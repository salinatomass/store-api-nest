import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';

import { ProductsService } from 'src/products/services/products.service';

@Injectable()
export class UsersService {
  constructor(private productsService: ProductsService) {}

  private users: User[] = [];
  private counterId = this.users.length;

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId += 1;
    const newUser = { id: this.counterId, ...payload };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === user.id);
    this.users[index] = { ...user, ...payload };
    return this.users[index];
  }

  delete(id: number) {
    const user = this.findOne(id);
    this.users = this.users.filter((item) => item.id !== user.id);
    return user;
  }

  getOrderByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
