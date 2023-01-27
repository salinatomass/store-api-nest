import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Order } from '../entities/order.entity';
import { Customer } from '../entities/customer.entity';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepo: Repository<Order>,
    @InjectRepository(Customer) private customersRepo: Repository<Customer>,
  ) {}

  async findAll() {
    return await this.ordersRepo.find();
  }

  async findOne(id: number) {
    const order = await this.ordersRepo.findOne({
      where: { id },
      relations: ['items', 'items.product'],
    });
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async create(data: CreateOrderDto) {
    const order = new Order();
    if (data.customerId) {
      const customer = await this.customersRepo.findOneBy({
        id: data.customerId,
      });
      if (!customer) throw new NotFoundException('Customer not found');
      order.customer = customer;
    }
    return await this.ordersRepo.save(order);
  }

  async update(id: number, changes: UpdateOrderDto) {
    const order = await this.ordersRepo.findOneBy({ id });
    if (changes.customerId) {
      const customer = await this.customersRepo.findOneBy({
        id: changes.customerId,
      });
      order.customer = customer;
    }
    return await this.ordersRepo.save(order);
  }

  async delete(id: number) {
    return await this.ordersRepo.delete(id);
  }
}
