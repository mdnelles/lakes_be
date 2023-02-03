import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateDetailDto {
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly lName: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly lNameAlia: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly countrys: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly continent: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly Lat: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly Lon: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly gLat: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly gLon: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly gMapZoom: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly Altitude: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly SurfaceArea: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly maxDepth: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly MeanDepth: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly Volume: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly Shoreline: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly catchmentArea: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly residenceTime: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly frozenPeriods: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly frozenMonths: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly mixingType: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly morphDam: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly relatedInfo: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly ilecCode: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly description: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly gMapsLink: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly img: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly settlements: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly age: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly origin: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly fishSpecies: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly other1: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly lakeID: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly other3: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly other4: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly beenCounted: string;
}
