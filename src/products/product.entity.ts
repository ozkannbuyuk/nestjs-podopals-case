import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  sku: string;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'int', nullable: true })
  position: number;
}
