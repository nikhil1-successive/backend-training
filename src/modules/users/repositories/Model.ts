

import { model, Schema, Document } from 'mongoose';

export interface IProperty extends Document {
  title: string;
  description: string;
  price:Number;
  location:string
  createdAt: Date;
  updatedAt: Date;
}

const propertySchema = new Schema<IProperty>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  location : {type: String},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const PropertyModel = model<IProperty>('Todo', propertySchema);
