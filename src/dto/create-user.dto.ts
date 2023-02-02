import { IsNumber, IsString, MaxLength, IsOptional } from 'class-validator';
export class CreateUserDto {
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly lastName: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly password: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly logs: string[];
}
