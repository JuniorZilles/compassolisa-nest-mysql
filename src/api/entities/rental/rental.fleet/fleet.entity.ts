/* eslint-disable @typescript-eslint/no-unused-vars */
import Car from '@entities/cars/car.entity';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Rental from '../rental.entity';

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

  @ManyToOne((type) => Car, (car) => car.id)
  @Column({ type: 'uuid', nullable: false })
  id_carro: string;

  @ManyToOne((type) => Rental, (rental) => rental.id)
  @Column({ type: 'uuid', nullable: false })
  id_rental: string;

  @Exclude()
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @Exclude()
  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)'
  })
  updated_at: Date;
}
