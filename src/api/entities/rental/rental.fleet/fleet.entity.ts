/* eslint-disable @typescript-eslint/no-unused-vars */
import Car from '@entities/cars/car.entity';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Rental from '../rental.entity';

@Entity('fleet')
export default class Fleet {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  placa: string;

  @Column({ nullable: false, enum: ['disponível', 'indisponível'] })
  status: string;

  @Column({ nullable: false })
  valor_diaria: number;

  @ManyToOne((type) => Car, (car) => car.id)
  @Column({ type: 'uuid', nullable: false })
  id_carro: string;

  @ManyToOne((type) => Rental, (rental) => rental.id)
  @Column({ type: 'uuid', nullable: false })
  id_rental: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @BeforeUpdate()
  updateDates() {
    this.updated_at = new Date();
  }

  @BeforeInsert()
  setDates() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
