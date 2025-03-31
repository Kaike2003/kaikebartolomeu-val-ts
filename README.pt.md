# Documentação do @kaikebartolomeu/val-ts

> 📚 Idiomas disponíveis: [English](README.md) | [Português](README.pt.md)

## Introdução

**@kaikebartolomeu/val-ts** é uma biblioteca leve em TypeScript que permite a validação automática de propriedades de classes. Utilizando decoradores, garante que os valores atribuídos sigam formatos predefinidos, como e-mails, IBANs, passaportes, documentos de identidade e números de telefone. Além disso, a função `validate` verifica se todas as propriedades de uma instância são válidas antes do uso.

Todos os decoradores agora suportam mensagens de erro personalizadas, permitindo um feedback de validação mais amigável.

**Autor:** Kaike Bartolomeu

## Instalação

```sh
npm install @kaikebartolomeu/val-ts
yarn add @kaikebartolomeu/val-ts
pnpm add @kaikebartolomeu/val-ts
```

## Uso

### Exemplo Básico

```typescript
import { IsPhone, IsString, validate } from "@kaikebartolomeu/val-ts";

class Pessoa {
  @IsString()
  @IsEmail("Gmail")
  email!: string;

  @IsString()
  @IsPhone("+244")
  telefone!: string;
}

const usuario = new Pessoa();
usuario.email = "kaike@gmail.com";
usuario.telefone = "+244923156789";

await validate(usuario)
  .then((usuarioValidado) => {
    console.log("Dados validados:", usuarioValidado);
  })
  .catch((error) => {
    console.error("Erro na validação:", error);
  });
```

### Exemplo Avançado com Mensagens de Erro Personalizadas

```typescript
import { IsPhone, IsString, validate } from "@kaikebartolomeu/val-ts";

class Usuario {
  @IsString("O número de telefone deve ser uma string")
  @IsPhone("+244", "Deve ser um número de telefone válido para Angola")
  telefone!: string;
}

const usuario = new Usuario();
usuario.telefone = "+244923156789";

await validate(usuario)
  .then((usuarioValidado) => {
    console.log("Dados validados:", usuarioValidado);
  })
  .catch((error) => {
    console.error("Erro na validação:", error);
  });
```

### Exemplo com Express

```typescript
import express, { Request, Response } from "express";
import { validate } from "@kaikebartolomeu/val-ts";

export class User {
  @IsString("O email deve ser uma string")
  @IsEmail("Gmail", "O provedor deve ser um gmail")
  email!: string;

  @IsString("O iban deve ser uma string")
  @IsIban("AO")
  iban!: string;

  @IsString("O passport deve ser uma string")
  @IsPassport("AO")
  passport!: string;

  @IsString("O número de telefone deve ser uma string")
  @IsPhone("+244")
  phone!: string;
}

interface IUser {
  iban: string;
  email: string;
  phone: string;
  passport: string;
}

const app = express();
app.use(express.json());

app.post("/user", async (req: Request<{}, {}, Required<IUser>>, res: Response) => {
  try {
    const { phone, email, iban, passport } = req.body;
    const user = new User();

    user.email = email;
    user.phone = phone;
    user.passport = passport;
    user.iban = iban;

    const validatedUser = await validate(user);
    res.status(201).json(validatedUser);
  } catch (error) {
    res.status(400).json({ error: "Erro na validação", detalhes: error });
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port: ${port}`));
```

## Decoradores Disponíveis

### String

- `@IsString(mensagemDeErro?: string)`
- `@IsAlpha(mensagemDeErro?: string)`
- `@IsAlphaNumeric(mensagemDeErro?: string)`
- `@IsLowercase(mensagemDeErro?: string)`
- `@IsUppercase(mensagemDeErro?: string)`
- `@IsEmpty(mensagemDeErro?: string)`
- `@IsUrl(mensagemDeErro?: string)`
- `@IsUUID(mensagemDeErro?: string)`
- `@IsMaxLength(valor: number, mensagemDeErro?: string)`
- `@IsMinLength(valor: number, mensagemDeErro?: string)`
- `@IsNull(mensagemDeErro?: string)`
- `@IsUndefined(mensagemDeErro?: string)`

### Número

- `@IsNumber(mensagemDeErro?: string)`
- `@IsInteger(mensagemDeErro?: string)`
- `@IsPositive(mensagemDeErro?: string)`
- `@IsNegative(mensagemDeErro?: string)`
- `@IsMax(valor: number, mensagemDeErro?: string)`
- `@IsMin(valor: number, mensagemDeErro?: string)`
- `@IsEnum(enumObjeto: object, mensagemDeErro?: string)`

### Geral

- `@IsBoolean(mensagemDeErro?: string)`
- `@IsDate(mensagemDeErro?: string)`
- `@IsMaxDate(data: Date, mensagemDeErro?: string)`
- `@IsMinDate(data: Date, mensagemDeErro?: string)`
- `@IsArray(mensagemDeErro?: string)`
- `@IsObject(mensagemDeErro?: string)`
- `@IsFunction(mensagemDeErro?: string)`
- `@IsProperty(chave: string, mensagemDeErro?: string)`
- `@IsJSON(mensagemDeErro?: string)`

### Customizados

- `@IsEmail(provedor: EmailProvider, mensagemDeErro?: string)`
- `@IsPhone(codigoPais: PhoneCountryCode, mensagemDeErro?: string)`
- `@IsIban(mensagemDeErro?: string)`
- `@IsPassport(mensagemDeErro?: string)`
- `@IsIdentityCard(mensagemDeErro?: string)`

## Tipos Suportados

### Países (Country)

"AF" | "AO" | "AR" | "AU" | "BR" | "CA" | "CN" | "DE" | "ES" | "FR" | "GB" | "IN" | "IT" | "JP" | "MX" | "PT" | "RU" | "US" | "ZA"

### Provedores de E-mail (EmailProvider)

"Generic Email" | "Gmail" | "Hotmail/Outlook" | "Yahoo" | "ProtonMail" | "Yandex" | "iCloud" | "Zoho Mail" | "GMX" | "Mail.ru" | "Japan (docomo)" | "China (163.com)" | "Brazil (UOL)" | "South Korea (Naver)" | "Germany (Web.de)" | "France (Orange)" | "United Kingdom (BT Internet)"

### Códigos de Telefone (PhoneCountryCode)

"+93" | "+244" | "+54" | "+61" | "+55" | "+1" | "+86" | "+49" | "+34" | "+33" | "+44" | "+91" | "+39" | "+81" | "+52" | "+351" | "+7" | "+27"

## Conclusão

**@kaikebartolomeu/val-ts** simplifica a validação de dados em classes TypeScript, garantindo que todas as propriedades tenham valores corretos antes do uso. Isso previne erros em tempo de execução e melhora a confiabilidade do sistema.
