import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('endereco')
export default class Endereco {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  isFilial: boolean;

  @Column({ type: 'uuid', nullable: false })
  id_rental: string;

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
