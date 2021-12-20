import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Person {
  @PrimaryGeneratedColumn()
  id: number;
}
