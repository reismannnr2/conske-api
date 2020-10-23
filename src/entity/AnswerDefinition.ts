import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EventPlan from './EventPlan';

@Entity()
export default class AnswerDefinition {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;

  @Column()
  exclusive!: boolean;

  @Column()
  sortNo!: number;

  @Column()
  eventPlanId!: string;

  @ManyToOne(() => EventPlan, (plan) => plan.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'eventPlanId', referencedColumnName: 'id' })
  eventPlan!: EventPlan;
}
