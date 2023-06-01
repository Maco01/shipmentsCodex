import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trackingId: number;

  @Column()
  productName: string;

  @Column()
  weight: number;

  @Column()
  shipmentStatus: string;
  @Column()
  shipmentType: string;
  @Column()
  estimatedArrival: string;
  @Column()
  Departure: string;

  @Column()
  Arrival: string;
}
