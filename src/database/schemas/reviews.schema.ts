import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type ReviewDocument = Review & Document
@Schema({ timestamps: true })
export class Review {
    @Prop({ type: Types.ObjectId, ref: "User", required: true })
    userId: Types.ObjectId; // Reference to the user who wrote the review

    @Prop({ type: Types.ObjectId, ref: "Venue", required: true })
    venueId: Types.ObjectId; // Reference to the venue being reviewed

    @Prop({ type: Types.ObjectId, ref: "Field", required: true })
    fieldId: Types.ObjectId; // Reference to the field being reviewed

    @Prop({ type: Number, required: true, nim: 1, max: 5 })
    rating: number; // Rating given by the user, e.g., 1 to 5

    @Prop({ type: String, default: '' })
    comment: string; // Text of the review
}
// { timestamps: { createdAt: true, updatedAt: false } });

export const ReviewSchema = SchemaFactory.createForClass(Review);
ReviewSchema.index({ venueId: 1 }); 
ReviewSchema.index({ fieldId: 1 }); 
ReviewSchema.index({ userId: 1 }); 