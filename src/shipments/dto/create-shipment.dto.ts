import { IsNumber, IsString } from 'class-validator';

export class CreateShipment {
  @IsNumber()
  trackingId: number;
  @IsString()
  productName: string;
  @IsNumber()
  weight: number;
  @IsString()
  shipmentStatus: string;
  @IsString()
  estimatedArrival: string;
  @IsString()
  Departure: string;
  @IsString()
  Arrival: string;
}
