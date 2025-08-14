import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type UserDocument = Venue & Document
@Schema({ timestamps: true })
export class Venue {
    @Prop({ type: Types.ObjectId, ref: "User", required: true })    
    ownerId: Types.ObjectId;

    @Prop({ required: true})
    name: string;

    @Prop({ type: String, default: '' })
    description: string;

    @Prop({ type: String, required: true})
    address: string;

    @Prop(raw({
        type: {type: String,enum: ['Point'], required: true }, // 'Point'
        coordinates: { type: [Number], required: true } // [longitude, latitude]
    }))
    location: { type: 'Point'; coordinates: [number, number]};

    @Prop({type: [String], required: true})
    phones: string[];

    @Prop({ type: [String], default: [] })
    images: string[];

    // open per day
    @Prop(raw({
        mon: [{ start: String, end: String }],
        tue: [{ start: String, end: String }],
        wed: [{ start: String, end: String }],
        thu: [{ start: String, end: String }],
        fri: [{ start: String, end: String }],
        sat: [{ start: String, end: String }],
        sun: [{ start: String, end: String }]
    }))
    openHours: {
    mon: { start: string; end: string }[];
    tue: { start: string; end: string }[];
    wed: { start: string; end: string }[];
    thu: { start: string; end: string }[];
    fri: { start: string; end: string }[];
    sat: { start: string; end: string }[];
    sun: { start: string; end: string }[];
    };

    @Prop(raw({
        type: { type : String, enum: ['before', 'after'], required: true }, // 'before' or 'after'
        time: { type: String, required: true } // e.g., '1 hour', '30 minutes'
    }))
    cancelPolicy: {type: "before" | "after"; time: string};

    @Prop({ default: true})
    active: boolean;
 }

export const VenueSchema = SchemaFactory.createForClass(Venue);
VenueSchema.index({ location: '2dsphere' }); // Create a 2dsphere index for geospatial queries
VenueSchema.index({ ownerId: 1 }); // Index for ownerId to optimize queries by
VenueSchema.index({active: 1});
VenueSchema.index({name: 'text'});

