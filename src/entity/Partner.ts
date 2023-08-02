import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'collections' })
export class Partner {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: false })
  name: string
}
