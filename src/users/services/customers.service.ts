import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
import { Customer } from 'src/users/entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];
  private counterId = this.customers.length;

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) throw new NotFoundException('Customer not found');
    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId += 1;
    const newCustomer = { id: this.counterId, ...payload };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === customer.id);
    this.customers[index] = { ...customer, ...payload };
    return this.customers[index];
  }

  delete(id: number) {
    const customer = this.findOne(id);
    this.customers = this.customers.filter((item) => item.id !== customer.id);
    return customer;
  }
}
