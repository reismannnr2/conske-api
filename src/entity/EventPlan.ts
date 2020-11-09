import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import AnswerDefinition from 'src/entity/AnswerDefinition';
import Member from 'src/entity/Member';
import AnswerDate from 'src/entity/AnswerDate';

@Entity()
export default class EventPlan {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ generated: 'uuid', unique: true })
  editKey!: string;

  @Column()
  title!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @OneToMany(() => AnswerDefinition, (answerDefinition) => answerDefinition.id)
  answerDefinitions!: AnswerDefinition[];

  @OneToMany(() => AnswerDate, (date) => date.id)
  dates!: AnswerDate[];

  @OneToMany(() => Member, (member) => member.id)
  members!: Member[];
}
