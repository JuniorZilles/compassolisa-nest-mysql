/* eslint-disable import/no-cycle */
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Endereco from './endereco.entity';
import Fleet from './rental.fleet/fleet.entity';
import Reserve from './rental.reserve/reserve.entity';

@Entity('rental')
export default class Rental {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false, unique: true })
  cnpj: string;

  @Column({ nullable: false })
  atividades: string;

  @OneToMany(() => Endereco, (address) => address.rental, { onDelete: 'CASCADE', cascade: true })
  endereco: Endereco[];

  @OneToMany(() => Fleet, (fleet) => fleet.rental, { onDelete: 'CASCADE' })
  fleets: Fleet[];

  @OneToMany(() => Reserve, (reserve) => reserve.rental, { onDelete: 'CASCADE' })
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
