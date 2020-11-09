import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import EventPlan from 'src/entity/EventPlan';

@Entity()
export default class Member {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  comment!: string;

  @Column()
  eventId!: string;

  @ManyToOne(() => EventPlan, (event) => event.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'eventId', referencedColumnName: 'id' })
  event!: EventPlan;
}
