import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'collections' })
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 36, collation: 'utf8mb4_unicode_ci' })
  uuid: string;

  @Column('bigint', { unsigned: true })
  partner_id: number;

  @Column({type:'bigint', unsigned: true, default: null })
  collection_account_id: number;

  @Column('bigint', { unsigned: true, nullable: true })
  payin_id: number ;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  merchant_transaction_ref: string;

  @Column('decimal', { precision: 15, scale: 2 })
  amount: number;

  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  amount_received: number | null;

  @Column({ type: 'varchar', length: 1000, collation: 'utf8mb4_unicode_ci' })
  redirect_url: string;

  @Column({ type: 'varchar', length: 1000, collation: 'utf8mb4_unicode_ci' })
  webhook_url: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  customer_name: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  customer_email: string | null;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  customer_phone_no: string | null;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  sender_nuban: string | null;

  @Column({ type: 'int', default: 0 })
  transaction_status: number;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  narration: string | null;

  @Column({ type: 'tinyint', default: 0 })
  transaction_completion: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  charge_amount: number | null;

  @Column({ type: 'datetime', nullable: true })
  expired_at: Date | null;

  @Column({ type: 'tinyint', default: 0 })
  is_paid: boolean;

  @Column({ type: 'tinyint', default: 0 })
  in_use: boolean;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  cba_id: string | null;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date | null;
}
