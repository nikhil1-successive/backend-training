import { Model, Document, Query } from 'mongoose';
import { IProperty, PropertyModel } from './Model';

export class PropertyRepository {
  private model: Model<IProperty>;

  constructor(model: Model<IProperty> = PropertyModel) {
    this.model = model;
  }

  create(data: any): Promise<IProperty> {
    return this.model.create(data);
  }

  findById(id: string): Query<IProperty | null, IProperty, {}> {
    return this.model.findById(id);
  }

  findAll(): Query<IProperty[], IProperty, {}> {
    return this.model.find({});
  }

  update(id: string, data: any): Query<IProperty | null, IProperty, {}> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

//   delete(id: string): Query<IProperty | null, IProperty, {}> {
//     return this.model.findByIdAndDelete(id);
//   }
}
