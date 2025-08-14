import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type Pricing_ruleDocument = Pricing_rule & Document
@Schema({ timestamps: true })
export class Pricing_rule {
    @Prop({ type: Types.ObjectId, ref: "Venue", required: true })    
    venueId: Types.ObjectId;

    @Prop({ type: Types.ObjectId, ref: "Filed", default: null })    
    fieldId: Types.ObjectId;

    @Prop({type:[Number], required: true})
    daysOfWeek: number[]; // 0: Sunday, 1: Monday, ..., 6: Saturday

    @Prop({type:String, required: true})
    timeRange: [{ start: string; end: string }]; // e.g., [{ start: "08:00", end: "10:00" }]

    @Prop({type:Number, required: true})
    basePrice: number; // Base price for the time range

    @Prop({type:Boolean, default: false})
    peak: boolean; // Whether this is a peak time or not

    @Prop({type:Boolean, default: false})
    holiday: boolean; // Whether this is a holiday pricing rule or not
 
}

export const Pricing_ruleSchema = SchemaFactory.createForClass(Pricing_rule);
Pricing_ruleSchema.index({ venueId: 1, fieldId: 1 }); // Index for venueId to optimize queries by venue
Pricing_ruleSchema.index({ daysOfWeek: 1 }); // Index for daysOfWeek to optimize queries by day
