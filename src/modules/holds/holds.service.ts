import { Injectable } from '@nestjs/common';
import { CreateHoldDto } from './dto/create-hold.dto';
import { UpdateHoldDto } from './dto/update-hold.dto';

@Injectable()
export class HoldsService {
  create(createHoldDto: CreateHoldDto) {
    return 'This action adds a new hold';
  }

  findAll() {
    return `This action returns all holds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hold`;
  }

  update(id: number, updateHoldDto: UpdateHoldDto) {
    return `This action updates a #${id} hold`;
  }

  remove(id: number) {
    return `This action removes a #${id} hold`;
  }
}
