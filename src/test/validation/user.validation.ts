import { IsString, IsEmail, IsNumber, MinLength, MaxLength, IsPositive } from "../../index";

export class User {
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  name!: string;

  @IsString()
  @IsEmail("Gmail")
  email!: string;

  @IsNumber()
  @IsPositive()
  age!: number;
}
