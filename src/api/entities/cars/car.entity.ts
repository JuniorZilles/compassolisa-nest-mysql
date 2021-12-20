import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import Accessory from './cars.accessory/accessory.entity';

@Entity('cars')
export default class Car {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  modelo: string;

  @Column({ nullable: false })
  cor: string;

  @Column({ nullable: false })
  ano: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Accessory, (accessory) => accessory.id_car)
  acessorios: Accessory[];

  @Column({ nullable: false })
  quantidadePassageiros: number;

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
