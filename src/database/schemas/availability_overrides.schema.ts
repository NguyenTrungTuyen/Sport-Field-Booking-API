import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type Availaility_overrideDocument = Availaility_override & Document
@Schema({ timestamps: true })
export class Availaility_override {
    @Prop({ type: Types.ObjectId, ref: "Field", required: true })
    fieldId: Types.ObjectId;

    @Prop({ type: Date, required: true })
    date: Date;

    @Prop({ type: Boolean, required: true })
    closed: boolean; // true if the field is closed on this date, false if it is open

    @Prop({ type: String, required: true })
    blockedRanges: [{ start: string; end: string }]; // e.g., [{ start: "08:00", end: "10:00" }]
 
}

export const Availaility_overrideSchema = SchemaFactory.createForClass(Availaility_override);
Availaility_overrideSchema.index({ fieldId: 1, date: 1 }, { unique: true });
