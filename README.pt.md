# TS-Validator - Documentação Oficial (Português)

[🇬🇧 English Version](README.md) | [🇵🇹 Versão Portuguesa](README.pt.md)

TS-Validator é uma biblioteca poderosa e flexível para validação de dados em TypeScript, permitindo a definição de regras de validação usando decoradores. Suporta validação de strings, números, arrays, objetos, enums, datas e muito mais.

Criado por **Kaike Bartolomeu**.

## Instalação

Para instalar a biblioteca, utilize:

```sh
npm install ts-validator
pnpm add ts-validator
yarn add ts-validator
```

## Uso Básico

Utilize os decoradores de validação nas propriedades da sua classe e chame a função `validate()` para verificar erros.

```ts
import { validate, MinLength, MaxLength, IsEmail, IsAlphaNumeric, IsPhone, IsEnum } from "ts-validator";

enum TipoUsuario {
  ADMIN = "admin",
  CLIENTE = "cliente",
  GUEST = "guest",
}

class Usuario {
  @IsEmail("Gmail")
  email!: string;

  @MinLength(8)
  @MaxLength(20)
  senha!: string;

  @IsAlphaNumeric()
  nomeDeUsuario!: string;

  @IsPhone("+55")
  telefone!: string;

  @IsEnum(TipoUsuario)
  tipo!: TipoUsuario;
}

const usuario = new Usuario();
usuario.email = "exemplo@gmail.com";
usuario.senha = "senha123";
usuario.nomeDeUsuario = "user2024";
usuario.telefone = "+559999999999";
usuario.tipo = TipoUsuario.CLIENTE;

console.log(validate(usuario));
```

---

## Exemplo: Validação de Documentos e Contatos Pessoais

```ts
import { IsEmail, IsIban, IsIdentityCard, IsPassport, IsPhone, validate, IsEnum } from "ts-validator";

enum Genero {
  MASCULINO = "masculino",
  FEMININO = "feminino",
  OUTRO = "outro",
}

class Pessoa {
  @IsEmail("Gmail")
  email!: string;

  @IsIban("AO")
  iban!: string;

  @IsPassport("AO")
  passaporte!: string;

  @IsIdentityCard("AO")
  bilhete!: string;

  @IsPhone("+244")
  telefone!: string;

  @IsEnum(Genero)
  genero!: Genero;
}

const pessoa = new Pessoa();
pessoa.email = "kaike@gmail.com";
pessoa.iban = "AO06123456789012345678901";
pessoa.passaporte = "A1234567";
pessoa.bilhete = "123456789LA001";
pessoa.telefone = "+244923456789";
pessoa.genero = Genero.MASCULINO;

try {
  console.log(validate(pessoa));
} catch (error) {
  console.log(error);
}
```

---

## Decoradores Disponíveis

### **Validação de Strings**

- `@IsEmail(provider?: string)` - Valida um e-mail.
- `@IsIban(countryCode: string)` - Valida IBAN de um país.
- `@IsIdentityCard(countryCode: string)` - Valida número de identidade.
- `@IsPassport(countryCode: string)` - Valida passaporte.
- `@IsPhone(countryCode: string)` - Valida número de telefone.
- `@MinLength(n: number)` - Define comprimento mínimo.
- `@MaxLength(n: number)` - Define comprimento máximo.
- `@IsAlpha()` - Apenas letras.
- `@IsAlphaNumeric()` - Apenas letras e números.
- `@IsLowercase()` - Apenas minúsculas.
- `@IsUppercase()` - Apenas maiúsculas.
- `@Matches(regex: RegExp)` - Valida padrão regex.

### **Validação de Números**

- `@IsInteger()` - Valida inteiro.
- `@IsPositive()` - Apenas positivo.
- `@IsNegative()` - Apenas negativo.
- `@Min(n: number)` - Define valor mínimo.
- `@Max(n: number)` - Define valor máximo.
- `@IsNumber()` - Garante que é um número.
- `@IsEnum(enumType: any)` - Valida enum.

### **Validação de Arrays**

- `@IsArray()` - Garante que é um array.
- `@ArrayMinSize(n: number)` - Define tamanho mínimo.
- `@ArrayMaxSize(n: number)` - Define tamanho máximo.
- `@ArrayNotEmpty()` - Garante que não está vazio.

### **Validação de Objetos**

- `@IsObject()` - Valida se é um objeto.
- `@IsJson()` - Valida JSON.
- `@HasProperty(prop: string)` - Verifica se há uma propriedade.

### **Validação de Datas**

- `@IsDate()` - Garante que é uma data.
- `@MinDate(date: Date)` - Define data mínima.
- `@MaxDate(date: Date)` - Define data máxima.

### **Validação de Booleanos**

- `@IsBoolean()` - Garante que é um booleano.

### **Validação Personalizada**

- `@CustomValidate(validatorFn: (value: any) => boolean | string)` - Permite lógica personalizada.

---

## Tratamento de Erros

```ts
try {
  validate(usuario);
} catch (error) {
  console.error("Falha na validação:", error);
}
```

---

## Versão em Inglês

[🇬🇧 Acesse a documentação em inglês](README.md)
