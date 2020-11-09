import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import AnswerDefinition from './AnswerDefinition';
import AnswerDate from './AnswerDate';
import Member from './Member';

@Entity()
export default class Answer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  comment!: string;

  @Column()
  dateId!: number;

  @ManyToOne(() => AnswerDate, (date) => date.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'dateId', referencedColumnName: 'id' })
  answerDate!: AnswerDate;

  @Column()
  defId!: number;

  @ManyToOne(() => AnswerDefinition, (def) => def.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'defId', referencedColumnName: 'id' })
  answerDef!: AnswerDefinition;

  @Column()
  memberID!: number;

  @ManyToOne(() => AnswerDate, (date) => date.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'memberId', referencedColumnName: 'id' })
  member!: Member;
}
