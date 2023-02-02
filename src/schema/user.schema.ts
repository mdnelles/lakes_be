import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Details {
  @Prop()
  id: number;

  @Prop()
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  logs: string[];
}
export const DetailsSchema = SchemaFactory.createForClass(Details);
