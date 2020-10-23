import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EventPlan from './EventPlan';
import DateAnswer from './DateAnswer';

export default class Member {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  sortNo!: number;

  @Column({ nullable: true })
  comment?: string | null;

  @Column()
  eventPlanId!: string;

  @ManyToOne(() => EventPlan, (plan) => plan.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'eventPlanId', referencedColumnName: 'id' })
  eventPlan!: EventPlan;

  @OneToMany(() => DateAnswer, (answer) => answer.id)
  dateAnswers!: DateAnswer[];
}
