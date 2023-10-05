import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Catagories } from './catagories.entity';

@Entity({ name: 't_users' })
export class User extends BaseEntity {
  @Column({ name: 'name', type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @OneToMany(() => Catagories, (catagory) => catagory.user)
  catagories: Catagories[];
}
