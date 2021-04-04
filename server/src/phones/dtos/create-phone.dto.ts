import { IsNumber, IsString, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneDto {
  @ApiProperty()
  avatarUrl: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageFileName: string;

  @ApiProperty()
  manufacturer:  string;

  @ApiProperty()
  name:  string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  processor: string;

  @ApiProperty()
  ram:  string;

  @ApiProperty()
  screen:  string;
}
