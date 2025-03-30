# Documentação do TS-Validator

> 📖 Idiomas disponíveis: [English](README.md) | [Português](README.pt.md)

## Introdução

**TS-Validator** é uma biblioteca leve em TypeScript que permite a validação automática de propriedades de classes. Utilizando decoradores, garante que os valores atribuídos sigam formatos predefinidos, como e-mails, IBANs, passaportes, documentos de identidade e números de telefone. Além disso, a função `validate` verifica se todas as propriedades de uma instância são válidas antes do uso.

Todos os decoradores agora suportam mensagens de erro personalizadas, permitindo um feedback de validação mais amigável.

**Autor:** Kaike Bartolomeu

## Instalação

```sh
npm install ts-validator
yarn add ts-validator
pnpm add ts-validator
```

## Uso


### Exemplo Básico

```typescript
import { IsPhone, IsString, validate } from "ts-validator";

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

try {
  const usuarioValidado = validate(usuario);
  console.log("Dados validados:", usuarioValidado);
} catch (error: any) {
  console.error("Erro na validação:", error.message);
}
```

### Exemplo Avançado com Mensagens de Erro Personalizadas

```typescript
import { IsPhone, IsString, validate } from "ts-validator";

class Usuario {
  @IsString("O número de telefone deve ser uma string")
  @IsPhone("+244", "Deve ser um número de telefone válido para Angola")
  telefone!: string;
}

const usuario = new Usuario();
usuario.telefone = "+244943162154";

try {
  const usuarioValidado = validate(usuario);
  console.log("Dados validados:", usuarioValidado);
} catch (error: any) {
  console.error("Erro na validação:", error.message);
}
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

### Países (`Country`)

`"AF" | "AO" | "AR" | "AU" | "BR" | "CA" | "CN" | "DE" | "ES" | "FR" | "GB" | "IN" | "IT" | "JP" | "MX" | "PT" | "RU" | "US" | "ZA"`

### Provedores de E-mail (`EmailProvider`)

`"Generic Email" | "Gmail" | "Hotmail/Outlook" | "Yahoo" | "ProtonMail" | "Yandex" | "iCloud" | "Zoho Mail" | "GMX" | "Mail.ru" | "Japan (docomo)" | "China (163.com)" | "Brazil (UOL)" | "South Korea (Naver)" | "Germany (Web.de)" | "France (Orange)" | "United Kingdom (BT Internet)"`

### Códigos de Telefone (`PhoneCountryCode`)

`"+93" | "+244" | "+54" | "+61" | "+55" | "+1" | "+86" | "+49" | "+34" | "+33" | "+44" | "+91" | "+39" | "+81" | "+52" | "+351" | "+7" | "+27"`

## Conclusão

**TS-Validator** simplifica a validação de dados em classes TypeScript, garantindo que todas as propriedades tenham valores corretos antes do uso. Isso previne erros em tempo de execução e melhora a confiabilidade do sistema.
