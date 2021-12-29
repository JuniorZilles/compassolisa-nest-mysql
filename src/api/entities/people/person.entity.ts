import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('people')
export default class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({ type: 'date', nullable: false })
  data_nascimento: Date;

  @Column({ nullable: false })
  senha: string;

  @Column({ nullable: false, type: 'enum', enumName: 'habilitadoEnum', enum: ['sim', 'não'] })
  habilitado: string;

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
