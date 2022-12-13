import { CreatePetDto } from '../dto/create-pet.dto';

export class Pet extends CreatePetDto {
  id: string;
  name: string;
  idade: number;
}

