/* eslint-disable @typescript-eslint/no-unused-vars */
import Person from '@entities/people/person.entity';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Rental from '../rental.entity';
import Fleet from '../rental.fleet/fleet.entity';

@Entity('reserve')
export default class Reserve {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', nullable: false })
  data_inicio: Date;

  @Column({ type: 'date', nullable: false })
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
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @Exclude()
  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)'
  })
  updated_at: Date;
}
