import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'partner' })
export class Partner {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column('bigint', { unsigned: true })
  merchant_account_id: number;
}
