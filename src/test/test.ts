import { IsPhone, IsString, validate } from "..";

class Usuario {
  @IsString("O número de telefone deve ser uma string")
  @IsPhone("+244", "Deve ser um número de telefone válido para Angola")
  telefone!: string;
}

const usuario = new Usuario();
usuario.telefone = "+244943162154";

const data = validate(usuario);
console.log(data);
