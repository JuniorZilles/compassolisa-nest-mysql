import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Endereco from './endereco.entity';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Endereco, (address) => address.id_rental)
  endereco: Endereco[];

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
