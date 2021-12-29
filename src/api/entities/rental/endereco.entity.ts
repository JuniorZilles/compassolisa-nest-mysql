import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Rental from './rental.entity';

@Entity('endereco')
export default class Endereco {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  isFilial: boolean;

  @ManyToOne(() => Rental, (rental) => rental.id, { onDelete: 'CASCADE' })
  rental: Rental;

  @Column({ nullable: false })
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  localidade: string;

  @Column()
  uf: string;
}
