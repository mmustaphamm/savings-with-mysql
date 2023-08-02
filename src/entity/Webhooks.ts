import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'webhooks' })
export class Webhook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint', { unsigned: true })
  user_id: number;

  @Column('bigint', { unsigned: true })
  partner_id: number;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  name: string | null;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  secret_key: string;

  @Column({ type: 'text', collation: 'utf8mb4_unicode_ci' })
  webhook_url: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date | null;
}
