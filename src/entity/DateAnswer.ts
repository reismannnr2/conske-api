import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Member from './Member';
import Answer from './Answer';

@Entity()
export default class DateAnswer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  date!: Date;

  @Column()
  comment!: string;

  @Column()
  memberId!: number;

  @ManyToOne(() => Member, (member) => member.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'memberId', referencedColumnName: 'id' })
  member!: Member;

  @OneToMany(() => Answer, (answer) => answer.id)
  answers!: Answer[];
}
