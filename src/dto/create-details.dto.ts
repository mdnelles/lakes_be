import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateDetailsDto {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lNameAlia: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly countrys: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly continent: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly Lat: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly Lon: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gLat: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gLon: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gMapZoom: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly Altitude: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly SurfaceArea: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly maxDepth: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly MeanDepth: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly Volume: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly Shoreline: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly catchmentArea: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly residenceTime: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly frozenPeriods: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly frozenMonths: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly mixingType: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly morphDam: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly relatedInfo: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly ilecCode: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gMapsLink: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly img: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly settlements: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly age: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly origin: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly fishSpecies: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly other1: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lakeID: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly other3: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly other4: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly beenCounted: string;
}
