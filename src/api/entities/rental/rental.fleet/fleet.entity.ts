import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Fleet {
  @PrimaryGeneratedColumn()
  id: number;
}
