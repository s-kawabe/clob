import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator'

export class UpsertUserBody {
  @IsEmail()
  email: string

  @MaxLength(255)
  name: string

  @MaxLength(255)
  name_id: string

  image: string | null
}
