import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  // Get All Customers
  async findAll(): Promise<Customer[]> {
    return await this.customersRepository.find();
  }

  // Get One Customer
  async findOne(id: number): Promise<Customer> {
    return await this.customersRepository.findOne({ where: { id } });
  }

  // Create Customer
  async create(customer: Customer): Promise<Customer> {
    const newCustomer = this.customersRepository.create(customer);
    return await this.customersRepository.save(newCustomer);
  }

  // Update Customer
  async update(id: number, customer: Customer): Promise<Customer> {
    await this.customersRepository.update(id, customer);
    return await this.customersRepository.findOne({ where: { id } });
  }

  // Delete Customer
  async delete(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
