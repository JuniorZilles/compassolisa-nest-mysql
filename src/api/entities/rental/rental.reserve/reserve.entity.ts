/* eslint-disable @typescript-eslint/no-unused-vars */
import Person from '@entities/people/person.entity';
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
import Fleet from '../rental.fleet/fleet.entity';

@Entity('reserve')
export default class Reserve {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn({ type: 'date' })
  data_inicio: Date;

  @CreateDateColumn({ type: 'date' })
  data_fim: Date;

  @ManyToOne((type) => Fleet, (fleet) => fleet.id)
  @Column({ type: 'uuid', nullable: false })
  id_fleet: string;

  @ManyToOne((type) => Person, (person) => person.id)
  @Column({ type: 'uuid', nullable: false })
  id_user: string;

  @ManyToOne((type) => Rental, (rental) => rental.id)
  @Column({ type: 'uuid', nullable: false })
  id_rental: string;

  @Column({ nullable: false })
  valor_final: number;

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
