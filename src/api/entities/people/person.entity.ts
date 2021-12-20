import { Exclude } from 'class-transformer';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('people')
export default class Person {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  nome: string;

  @Column({
    nullable: false,
    unique: true,
    transformer: { to: (value: string) => value.toLowerCase(), from: (value: string) => value.toLowerCase() }
  })
  email: string;

  @Column({ nullable: false, unique: true })
  cpf: string;

  @CreateDateColumn({ type: 'date', nullable: false })
  data_nascimento: Date;

  @Column({ nullable: false })
  senha: string;

  @Column({ nullable: false, enum: ['sim', 'não'] })
  habilitado: string;

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
