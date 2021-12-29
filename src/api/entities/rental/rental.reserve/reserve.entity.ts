/* eslint-disable import/no-cycle */
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

  @ManyToOne(() => Fleet, (fleet) => fleet.id, { onDelete: 'CASCADE' })
  fleet: Fleet;

  @ManyToOne(() => Person, (person) => person.id, { onDelete: 'CASCADE' })
  person: Person;

  @ManyToOne(() => Rental, (rental) => rental.id, { onDelete: 'CASCADE' })
  rental: Rental;

  @Column({ nullable: false })
  valor_final: number;

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
