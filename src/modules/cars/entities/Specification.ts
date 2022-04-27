import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Specification {
  @PrimaryColumn()
  id?: string;

  @Column({
    length: 100
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}
