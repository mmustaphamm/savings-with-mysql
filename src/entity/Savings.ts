import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'payins' })
export class Payins {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double')
  amount: number;

  // @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  // beneficiary_name: string;

  // @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  // beneficiary_account_number: string;

  // @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  // channel: string;

  // @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  // narration: string | null;

  // @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  // reference: string;

  // @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  // session_id: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  sender_bvn: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  sender_kyc_level: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  sender_account_name: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  sender_account_number: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  sender_bank: string;

  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci' })
  sender_bank_code: string;

  
  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  remit_reference: string | null;
  
  @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  charge_reference: string | null;
  
  @Column('double', { nullable: true })
  charge_amount: number | null;
  // @Column('tinyint', { default: 0 })
  // is_reversed: boolean;

  // @Column('tinyint', { default: 0 })
  // notification_sent: boolean;

  // @Column('tinyint', { default: 0 })
  // is_remitted: boolean;

  // @Column('bigint', { unsigned: true })
  // merchant_account_id: number;

  //  @Column({ type: 'enum', enum: ['c', 'm', 'v'], nullable: true })
  //  account_type: string | null;

  // @Column({ type: 'varchar', length: 255, collation: 'utf8mb4_unicode_ci', nullable: true })
  // remittance_id: string | null;

  // @Column('bigint', { unsigned: true })
  // payin_raw_id: number;

  // @Column({ type: 'timestamp', nullable: true })
  // created_at: Date | null;

  // @Column({ type: 'timestamp', nullable: true })
  // updated_at: Date | null;
}
