import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  idade: number;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsString()
  role: string;
}
