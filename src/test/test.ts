import { IsEmail, IsString, validate } from "..";

class Data {
  @IsString()
  @IsEmail("iCloud")
  email!: string;
}

const data = new Data();

data.email = "kaike@icloud.com";

try {
  console.log(validate(data));
} catch (error) {
  console.log(error);
}
