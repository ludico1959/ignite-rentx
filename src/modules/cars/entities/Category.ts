import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity('categories')
export class Category {
  constructor() {
    if (!this.id) this.id = randomUUID();
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}
