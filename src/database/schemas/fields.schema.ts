import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type FieldDocument = Field & Document
@Schema({ timestamps: true })
export class Field {
    @Prop({ type: Types.ObjectId, ref: "Venue", required: true })    
    venueId: Types.ObjectId;
   
    @Prop({type:String, required: true})
    name : string;
   
    @Prop({type:String, required: true})
    sportType : string
   
    @Prop({type:String, required: true})
    countNumber : number;
   
    @Prop({type:[String], default:[]})
    features: string[];
   
    @Prop({type:[String], default:[]})
    images : string[];
   
    @Prop({type:Number, required: true})
    slotDuaration: number; 
   
    @Prop({type:String, default: true})
    active: boolean;

 
}

export const FieldSchema = SchemaFactory.createForClass(Field);
FieldSchema.index({ venueId: 1 }); // Index for venueId to optimize queries by venue
FieldSchema.index({ sportType: 1});
FieldSchema.index({ active: 1 }); // Text index for searching fields by name
