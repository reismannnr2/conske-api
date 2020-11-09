import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EventPlan from './EventPlan';

@Entity()
export default class AnswerDate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  raw!: Date;

  @Column()
  eventId!: string;

  @ManyToOne(() => EventPlan, (event) => event.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'eventId', referencedColumnName: 'id' })
  event!: EventPlan;
}
