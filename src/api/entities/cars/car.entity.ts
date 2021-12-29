import Fleet from '@entities/rental/rental.fleet/fleet.entity';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Accessory from './cars.accessory/accessory.entity';

@Entity('cars')
export default class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  modelo: string;

  @Column({ nullable: false })
  cor: string;

  @Column({ nullable: false })
  ano: number;

  @OneToMany(() => Accessory, (accessory) => accessory.carro, { onDelete: 'CASCADE', cascade: true })
  acessorios: Accessory[];

  @OneToMany(() => Fleet, (fleet) => fleet.carro, { onDelete: 'CASCADE' })
  cars: Fleet[];

  @Column({ nullable: false })
  quantidadePassageiros: number;

  @Exclude()
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP(6)', select: false })
  created_at: Date;

  @Exclude()
  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    select: false
  })
  updated_at: Date;

  constructor(partial: Partial<Car>) {
    Object.assign(this, partial);
  }
}
