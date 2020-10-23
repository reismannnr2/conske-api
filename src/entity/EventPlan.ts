import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Member from './Member';
import AnswerDefinition from 'src/entity/AnswerDefinition';

@Entity()
export default class EventPlan {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ generated: 'uuid', unique: true })
  editId!: string;

  @Column()
  title!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @OneToMany(() => Member, (member) => member.id)
  members!: Member[];

  @OneToMany(() => AnswerDefinition, (answerDefinition) => answerDefinition.id)
  answerDefinitions!: AnswerDefinition[];
}
