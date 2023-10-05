import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 't_icons' })
export class Icon extends BaseEntity {
  @Column({ name: 'code', type: 'varchar' })
  code: string;

  @Column({ name: 'symbol', type: 'varchar' })
  symbol: string;
}
