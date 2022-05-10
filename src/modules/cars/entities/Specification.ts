import { randomUUID } from 'crypto';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('specifications')
export class Specification {
  @PrimaryColumn()
  id?: string;

  @Column({
    length: 100
  })
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = randomUUID();
  }
}
