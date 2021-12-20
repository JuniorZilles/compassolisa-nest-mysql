import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Reserve {
  @PrimaryGeneratedColumn()
  id: number;
}
