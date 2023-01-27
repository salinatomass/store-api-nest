import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dto';
import { Customer } from 'src/users/entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) private customerRepo: Repository<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return await this.customerRepo.find();
  }

  async findOne(id: number) {
    const customer = await this.customerRepo.findOne({
      where: { id },
      relations: ['orders', 'orders.items'],
    });
    if (!customer) throw new NotFoundException('Customer not found');
    return customer;
  }

  async create(data: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepo.create(data);
    return await this.customerRepo.save(customer);
  }

  async update(id: number, changes: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.findOne(id);
    this.customerRepo.merge(customer, changes);
    return await this.customerRepo.save(customer);
  }

  async delete(id: number): Promise<Customer> {
    const customer = await this.findOne(id);
    await this.customerRepo.delete(id);
    return customer;
  }
}
