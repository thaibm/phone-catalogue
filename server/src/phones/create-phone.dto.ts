import { IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  model: string;

  @ApiProperty()
  @IsString()
  brand: string;

  @ApiProperty()
  @IsNumber()
  @Min(1900)
  year: number;
}
