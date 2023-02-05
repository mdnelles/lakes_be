import { Document } from 'mongoose';
export interface ITest extends Document {
  readonly name: string;
  readonly phone: string;
}
