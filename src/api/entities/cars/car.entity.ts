import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import Accessory from './cars.accessory/accessory.entity';

@Entity('cars')
export default class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  modelo: string;

  @Column({ nullable: false })
  cor: string;

  @Column({ nullable: false })
  ano: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Accessory, (accessory) => accessory.id_car)
  acessorios: Accessory[];

  @Column({ nullable: false })
  quantidadePassageiros: number;

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
