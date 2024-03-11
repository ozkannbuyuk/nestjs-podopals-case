import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Get All Products
  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  // Get One Product
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    const product = await this.productsService.findOne(id);

    if (!product) {
      throw new Error('Product not found!');
    } else {
      return product;
    }
  }

  // Create Product
  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return await this.productsService.create(product);
  }

  // Update Product
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productsService.update(id, product);
  }

  // Delete Product
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const product = await this.productsService.findOne(id);
    if (!product) {
      throw new Error('Product not found!');
    }
    return this.productsService.delete(id);
  }
}
