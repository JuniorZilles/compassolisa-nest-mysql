import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Accessory {
  @PrimaryGeneratedColumn()
  id: number;
}
