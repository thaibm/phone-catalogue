import { IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PhoneDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsString()
  screen: string;

  @ApiProperty()
  @IsString()
  imageFileName: string;

  @ApiProperty()
  @IsString()
  processor: string;

  @ApiProperty()
  @IsString()
  ram: string;
}

