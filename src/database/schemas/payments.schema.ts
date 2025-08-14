import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { type Document, Types } from "mongoose"

export type PaymentDocument = Payment & Document
@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: Types.ObjectId, ref: "Booking", required: true })
  bookingId: Types.ObjectId; // Reference to the booking associated with the payment

  @Prop({ type: String, required: true })
  provider: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  currency: string;

  @Prop({ type: String, required: true })
  status: string;

  @Prop({ type: String, required: true })
  transactionRef: string;

  @Prop({ type: mongoose.Schema.Types.Mixed, default: {} })
  meta: Record<string, any>; // Additional metadata about the payment
    
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
PaymentSchema.index({ bookingId: 1});
PaymentSchema.index({ status: 1});
