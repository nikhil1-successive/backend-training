import { Schema, model, Document, Types } from 'mongoose';

export interface BaseDocument extends Document {
  createdAt: Date;
  updatedAt: Date;
}

export const baseSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

baseSchema.pre<BaseDocument>('save', function (next) {
  this.updatedAt = new Date();
  next();
});

export const Base = model<BaseDocument>('Base', baseSchema);
