import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity('categories')
export class Category {
  constructor() {
    if (!this.id) this.id = randomUUID();
  }

  @PrimaryColumn()
  @Column('id')
  id: string;

  @Column('name')
  name: string;

  @Column('description')
  description: string;

  @CreateDateColumn('created_at')
  created_at: Date;
}
