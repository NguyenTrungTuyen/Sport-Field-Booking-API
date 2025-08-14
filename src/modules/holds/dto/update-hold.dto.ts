import { PartialType } from '@nestjs/swagger';
import { CreateHoldDto } from './create-hold.dto';

export class UpdateHoldDto extends PartialType(CreateHoldDto) {}
