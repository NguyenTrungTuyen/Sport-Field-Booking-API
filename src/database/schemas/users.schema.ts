import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { type Document, Types } from "mongoose"

export type UserDocument = User & Document
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false})
  password?: string;

  @Prop({ required: false })
  name?: string;

  @Prop({ default: 'user', enum: ['user', 'admin'] })
  roles?: "user" | "admin";

  @Prop({ required: false })
  phone?: string;

  @Prop()
  picture?: string;

  @Prop({default: 'Active', enum: ['Active', 'Blocked']})
  status?: "Active" | "Blocked" ;

  @Prop({default: true})
  isActive?: boolean;

  @Prop({required: false, unique: true, sparse: true})
  googleId?: string;

  @Prop({default: 'local', enum: ['local', 'google']})
  origin?: "local" | "google";

  @Prop({ default: null }) 
  deletedAt?: Date; // xóa mềm
 
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ email: 1 }, { unique: true }); // Ensure email is unique
UserSchema.index({ roles: 1 }, { unique: true, sparse: true });
