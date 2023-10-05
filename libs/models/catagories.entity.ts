import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Color } from './color.entity';
import { Icon } from './icon.entity';

@Entity({ name: 't_catagories' })
export class Catagories extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'is_Editable', type: 'boolean' })
  isEditable?: false;

  @OneToOne(() => Color)
  @JoinColumn()
  color: Color;

  @OneToOne(() => Icon)
  @JoinColumn()
  icon: Icon;

  @ManyToOne(() => User, (user) => user.catagories)
  user: User;
}
