import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Car {
  @PrimaryGeneratedColumn()
  id: number;
}
