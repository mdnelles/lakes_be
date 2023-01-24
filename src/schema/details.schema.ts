import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Details {
  @Prop()
  id: number;

  @Prop()
  lName: string;

  @Prop()
  lNameAlia: string;

  @Prop()
  countrys: string;

  @Prop()
  continent: string;

  @Prop()
  Lat: string;

  @Prop()
  Lon: string;

  @Prop()
  gLat: string;

  @Prop()
  gLon: string;

  @Prop()
  gMapZoom: string;

  @Prop()
  Altitude: string;

  @Prop()
  SurfaceArea: string;

  @Prop()
  maxDepth: string;

  @Prop()
  MeanDepth: string;

  @Prop()
  Volume: string;

  @Prop()
  Shoreline: string;

  @Prop()
  catchmentArea: string;

  @Prop()
  residenceTime: string;

  @Prop()
  frozenPeriods: string;

  @Prop()
  frozenMonths: string;

  @Prop()
  mixingType: string;

  @Prop()
  morphDam: string;

  @Prop()
  relatedInfo: string;

  @Prop()
  ilecCode: string;

  @Prop()
  description: string;

  @Prop()
  gMapsLink: string;

  @Prop()
  img: string;

  @Prop()
  settlements: string;

  @Prop()
  age: string;

  @Prop()
  origin: string;

  @Prop()
  fishSpecies: string;

  @Prop()
  other1: string;

  @Prop()
  lakeID: string;

  @Prop()
  other3: string;

  @Prop()
  other4: string;

  @Prop()
  beenCounted: string;
}
export const DetailsSchema = SchemaFactory.createForClass(Details);
