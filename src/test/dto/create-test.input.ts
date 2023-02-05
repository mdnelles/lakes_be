import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsOptional,
  MaxLength,
} from 'class-validator';
export class CreateTestDto {
  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly name: string;

  @IsString()
  @MaxLength(30)
  @IsOptional()
  readonly phone: string;
}
