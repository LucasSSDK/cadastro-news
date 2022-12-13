import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePetDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  idade: number;
}
