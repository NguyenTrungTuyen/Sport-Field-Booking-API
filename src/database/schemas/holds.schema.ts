import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type HoldDocument = Hold & Document
@Schema({ timestamps: true })
export class Hold {
    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    userId: Types.ObjectId; // Reference to the user holding the field

    @Prop({ type: Types.ObjectId, ref: "Filed", required: true })
    fieldId: Types.ObjectId; // Reference to the field being held

    @Prop({ type: Date, required: true })
    date: Date; // Date of the hold

    @Prop({ type: String, required: true })
    slots: string[]; // Array of time slots held, e.g., ['08:00', '08:30', '09:00']

    @Prop({ type: Number, required: true })
    expireAt: Date; // Expiration date of the hold
    
}
// { timestamps: { createdAt: true, updatedAt: false } });

export const HoldSchema = SchemaFactory.createForClass(Hold);
HoldSchema.index({ fieldId: 1, date: 1, slots: 1 }); // Index for fieldId and date to optimize queries
HoldSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0}); // Automatically remove holds after they expire