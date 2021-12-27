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
import Endereco from './endereco.entity';

@Entity('rental')
export default class Rental {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false, unique: true })
  cnpj: string;

  @Column({ nullable: false })
  atividades: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Endereco, (address) => address.id_rental)
  endereco: Endereco[];

  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Exclude()
  @CreateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @BeforeInsert()
  setDates() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  @BeforeUpdate()
  updateDates() {
    this.updated_at = new Date();
  }
}
