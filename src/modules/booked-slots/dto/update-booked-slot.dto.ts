import { PartialType } from '@nestjs/swagger';
import { CreateBookedSlotDto } from './create-booked-slot.dto';

export class UpdateBookedSlotDto extends PartialType(CreateBookedSlotDto) {}
