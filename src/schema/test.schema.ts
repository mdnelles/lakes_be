import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Test {
  @Prop()
  name: string;

  @Prop()
  phone: string;
}
export const TestSchema = SchemaFactory.createForClass(Test);
