import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  // Get All Products
  async findAll(): Promise<Product[]> {
    return await this.productsRepository.find();
  }

  // Get One Product
  async findOne(id: number): Promise<Product> {
    return await this.productsRepository.findOne({ where: { id } });
  }

  // Create Product
  async create(product: Product): Promise<Product> {
    const newProduct = this.productsRepository.create(product);
    return await this.productsRepository.save(newProduct);
  }

  // Update Product
  async update(id: number, product: Product): Promise<Product> {
    await this.productsRepository.update(id, product);
    return await this.productsRepository.findOne({ where: { id } });
  }

  // Delete Product
  async delete(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
