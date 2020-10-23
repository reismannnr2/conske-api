import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryColumn()
  name!: string;

  @Column()
  password!: string;
}
