import Reserve from '@entities/rental/rental.reserve/reserve.entity';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @Exclude()
  @Column({ nullable: false })
  senha: string;

  @Column({ nullable: false, type: 'enum', enumName: 'habilitadoEnum', enum: ['sim', 'não'] })
  habilitado: string;

  @OneToMany(() => Reserve, (reserve) => reserve.person, { onDelete: 'CASCADE' })
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
