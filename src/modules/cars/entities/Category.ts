import { Column, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity()
export class Category {
  constructor() {
    if (!this.id) this.id = randomUUID();
  }

  @PrimaryColumn()
  id: string;

  @Column({
    length: 100
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  created_at: Date;
}
