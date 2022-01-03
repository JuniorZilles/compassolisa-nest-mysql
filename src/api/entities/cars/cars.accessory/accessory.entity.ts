import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Car from '../car.entity';

@Entity('accessories')
export default class Accessory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  descricao: string;

  @ManyToOne(() => Car, (car) => car.id)
  carro: Car;

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
