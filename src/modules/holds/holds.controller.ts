import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HoldsService } from './holds.service';
import { CreateHoldDto } from './dto/create-hold.dto';
import { UpdateHoldDto } from './dto/update-hold.dto';

@Controller('holds')
export class HoldsController {
  constructor(private readonly holdsService: HoldsService) {}

  @Post()
  create(@Body() createHoldDto: CreateHoldDto) {
    return this.holdsService.create(createHoldDto);
  }

  @Get()
  findAll() {
    return this.holdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.holdsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHoldDto: UpdateHoldDto) {
    return this.holdsService.update(+id, updateHoldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.holdsService.remove(+id);
  }
}
