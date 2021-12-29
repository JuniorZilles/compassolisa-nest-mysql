/* eslint-disable import/no-cycle */
import Car from '@entities/cars/car.entity';
import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import Rental from '../rental.entity';
import Reserve from '../rental.reserve/reserve.entity';

@Entity('fleet')
export default class Fleet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  placa: string;

  @Column({ nullable: false, type: 'enum', enumName: 'statusEnum', enum: ['disponível', 'indisponível'] })
  status: string;

  @Column({ nullable: false })
  valor_diaria: number;

  @ManyToOne(() => Car, (car) => car.id, { onDelete: 'CASCADE' })
  carro: Car;

  @ManyToOne(() => Rental, (rental) => rental.id, { onDelete: 'CASCADE' })
  rental: Rental;

  @OneToMany(() => Reserve, (reserve) => reserve.fleet, { onDelete: 'CASCADE' })
  reserves: Reserve[];

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
}
