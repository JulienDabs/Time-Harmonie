import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({
    description: "Identifiant unique de l'utilisateur",
    example: 'uuid',
  })
  id: string;

  @ApiProperty({ description: "Prénom de l'utilisateur", example: 'John' })
  firstname: string;

  @ApiProperty({ description: "Nom de l'utilisateur", example: 'Doe' })
  lastname: string;

  @ApiProperty({
    description: "Email de l'utilisateur",
    example: 'john.doe@example.com',
  })
  email: string;

  @ApiProperty({
    description: "Mot de passe de l'utilisateur",
    example: 'password',
  })
  password: string;

  @ApiProperty({ description: "Rôle de l'utilisateur", example: 'user' })
  role: string;

  @ApiProperty({ description: "Email vérifié de l'utilisateur", example: true })
  email_verified: boolean;
  
  @ApiProperty({
    description: 'Date de création du compte',
    example: '2024-06-01T12:00:00Z',
  })
  created_at: Date;
}
