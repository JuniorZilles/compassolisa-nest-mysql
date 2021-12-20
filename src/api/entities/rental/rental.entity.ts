import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Rental {
  @PrimaryGeneratedColumn()
  id: number;
}
