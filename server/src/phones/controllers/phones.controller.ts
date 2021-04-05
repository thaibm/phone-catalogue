import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import * as slug from 'slug';

import { Phone } from '../phone.interface';
import { ApiTags, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiParam } from '@nestjs/swagger';
import { CreatePhoneDto } from '../dtos/create-phone.dto';
import { PhonesService } from '../services/phones.service';
import { PhoneDto } from '../dtos/phone.dto';
import { WrappedResponseInterceptor } from '../../interceptors/WrappedResponseInterceptor';

@Controller('phones')
@ApiTags('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) { }

  @Get()
  @ApiOperation({
    description: 'Get phone list',
  })
  @ApiOkResponse({
    type: PhoneDto,
    isArray: true,
  })
  @UseInterceptors(WrappedResponseInterceptor)
  async findAll(): Promise<PhoneDto[]> {
    return this.phonesService.findAll();
  }

  @Get(':phoneId')
  @ApiOperation({
    description: 'Get phone detail',
  })
  @ApiParam({ name: "phoneId", type: "string" })
  @ApiOkResponse({
    status: 200,
    type: PhoneDto,
    isArray: false,
  })
  @UseInterceptors(WrappedResponseInterceptor)
  async findById(@Param('phoneId') phoneId): Promise<PhoneDto> {
    return this.phonesService.findById(phoneId);
  }

  @Post()
  @ApiOperation({
    description: 'Create new phone',
  })
  @ApiCreatedResponse({
    type: PhoneDto,
    isArray: false,
  })
  async create(@Body() createPhoneDto: CreatePhoneDto) {
    const newEntry = Object.assign({}, createPhoneDto);
    return await this.phonesService.create(newEntry);
  }

  @Put(':phoneId')
  @ApiOperation({
    description: 'Update phone',
  })
  @ApiParam({ name: "phoneId", type: "string" })
  @ApiCreatedResponse({
    type: PhoneDto,
    isArray: false,
  })
  async update(@Param('phoneId') phoneId, @Body() createPhoneDto: CreatePhoneDto) {
    const newEntry = Object.assign({}, createPhoneDto);
    return await this.phonesService.update(+phoneId, newEntry);
  }

  @Delete(':phoneId')
  @ApiOperation({
    description: 'Delete phone',
  })
  @ApiParam({ name: "phoneId", type: "string" })
  delete(@Param('phoneId') phoneId) {
    return this.phonesService.deleteOne(phoneId);
  }
}
