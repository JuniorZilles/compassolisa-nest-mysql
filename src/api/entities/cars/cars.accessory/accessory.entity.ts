import { Exclude } from 'class-transformer';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accessories')
export default class Accessory {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  descricao: string;

  @Column({ type: 'uuid', nullable: false })
  id_car: number;

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
