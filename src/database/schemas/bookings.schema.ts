import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type BookingDocument = Booking & Document
@Schema({ timestamps: true })
export class Booking {
    @Prop({ type: String, required: true, unique: true })
    code: string; // Unique booking code

    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    userId: Types.ObjectId; // Reference to the user who made the booking

    @Prop({ type: Types.ObjectId, ref: "Venue", required: true })
    venueId: Types.ObjectId; // Reference to the venue

    @Prop({ type: Types.ObjectId, ref: "Field", required: true })
    fieldId: Types.ObjectId; // Reference to the field being booked

    @Prop({ type: Date, required: true })
    date: Date; // Date of the booking

    @Prop({ type: String, required: true })
    startTime: Date; // Start time of the booking in HH:mm format

    @Prop({ type: Date, required: true })
    endTime: Date; // End time of the booking in HH:mm format

    @Prop({ type: [String], required: true })
    slot: string[]; // Array of time slots booked, e.g., ['08:00', '08:30', '09:00']

    @Prop({ type: Number, required: true })
    price: number; // Total price for the booking

    @Prop({ type: String, default: 'VND' })
    currency: string; // Currency of the price, e.g., 'USD', 'VND'

    @Prop({ type: Date, default: Date.now })
    voucher: {code: string, discount: number, type:'percentage' | 'fixed'}; // Voucher details if applied

    @Prop({ type: String, required: true })
    status: string;

    @Prop({ type: String, required: true })
    paymentStatus: string;

    @Prop({ type: String, default: '' })
    changehistory: [{at: Date, action: string, note?: string}];
    
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
BookingSchema.index({ fieldId: 1, date: 1 }); 
BookingSchema.index({ fieldId: 1 , startTime: 1, endTime: 1 }); 
BookingSchema.index({ status: 1 }); 
BookingSchema.index({ date: 1 }, {unique: true }); // Ensure unique bookings per date for a field
