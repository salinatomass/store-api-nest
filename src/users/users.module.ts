import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from 'src/users/services/customers.service';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { OrderItemController } from './controllers/order-item.controller';
import { OrderItemService } from './services/order-item.service';
import { OrderItem } from './entities/order-item.entity';

import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Customer, Order, OrderItem]),
    ProductsModule,
  ],
  controllers: [
    UsersController,
    CustomersController,
    OrdersController,
    OrderItemController,
  ],
  providers: [UsersService, CustomersService, OrdersService, OrderItemService],
})
export class UsersModule {}
