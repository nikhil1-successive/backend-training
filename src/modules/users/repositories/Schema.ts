import { Schema } from 'mongoose';

export const propertySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
