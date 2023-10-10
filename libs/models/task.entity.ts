import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Catagories } from './catagories.entity';
import { User } from './user.entity';

@Entity({ name: 't_tasks' })
export class Task extends BaseEntity {
  @Column({ name: 'is_completed', type: 'boolean' })
  isCompleted: boolean;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @OneToOne(() => Catagories)
  @JoinColumn()
  catagoryId: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
