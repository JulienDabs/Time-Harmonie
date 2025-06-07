import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'First name of the user' })
  @IsString()
  firstname: String;

  @ApiProperty({ description: 'Last name of the user' })
  @IsString()
  lastname: String;

  @ApiProperty({ description: 'Email of the user' })
  @IsEmail()
  email: String;

  @ApiProperty({ description: 'Password of the user' })
  @IsString()
  password: String;

  @ApiProperty({ description: 'Role of the user' })
  @IsString()
  role: String;

  @ApiProperty({ description: 'Email verified of the user' })
  @IsBoolean()
  email_verified: boolean;
  
  @ApiProperty({
    description: 'Date de création du compte',
    example: '2024-06-01T12:00:00Z',
  })
  @IsDate()
  created_at: Date;
}
