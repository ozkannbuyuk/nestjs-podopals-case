import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // Get All Customers
  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customersService.findAll();
  }

  // Get One Customer
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Customer> {
    const customer = await this.customersService.findOne(id);

    if (!customer) {
      throw new Error('Customer not found!');
    } else {
      return customer;
    }
  }

  // Create Customer
  @Post()
  async create(@Body() customer: Customer): Promise<Customer> {
    return await this.customersService.create(customer);
  }

  // Update Customer
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() customer: Customer,
  ): Promise<Customer> {
    return this.customersService.update(id, customer);
  }

  // Delete Customer
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const customer = await this.customersService.findOne(id);
    if (!customer) {
      throw new Error('Customer not found!');
    }
    return this.customersService.delete(id);
  }
}
