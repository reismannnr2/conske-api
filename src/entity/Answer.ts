import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import AnswerDefinition from './AnswerDefinition';
import DateAnswer from './DateAnswer';

@Entity()
export default class Answer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  definitionId!: number;

  @ManyToOne(() => AnswerDefinition, (definition) => definition.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'definitionId', referencedColumnName: 'id' })
  definition!: AnswerDefinition;

  @Column()
  dateAnswerId!: number;

  @ManyToOne(() => DateAnswer, (dateAnswer) => dateAnswer.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'dateAnswerId', referencedColumnName: 'id' })
  dateAnswer!: DateAnswer;
}
