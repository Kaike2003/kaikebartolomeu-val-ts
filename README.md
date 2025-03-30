# TS-Validator Documentation

> 📖 Available languages: [English](README.md) | [Português](README.pt.md)

## Introduction

**TS-Validator** is a lightweight TypeScript library that enables automatic validation of class properties. By using decorators, it ensures that assigned values follow predefined formats, such as emails, IBANs, passports, identity documents, and phone numbers. Additionally, the `validate` function checks if all properties of an instance are valid before use.

All decorators now support custom error messages, allowing for more user-friendly validation feedback.

**Author:** Kaike Bartolomeu

## Installation

```sh
npm install ts-validator
yarn add ts-validator
pnpm add ts-validator
```

## Usage

### Basic Example

```typescript
import { IsPhone, IsString, validate } from "ts-validator";

class Person {
  @IsString()
  @IsEmail("Gmail")
  email!: string;

  @IsString()
  @IsPhone("+244")
  phone!: string;
}

const user = new Person();
user.email = "kaike@gmail.com";
user.phone = "+244923156789";

try {
  const validatedUser = validate(user);
  console.log("Validated data:", validatedUser);
} catch (error: any) {
  console.error("Validation error:", error.message);
}
```

### Advanced Example with Custom Error Messages

```typescript
import { IsPhone, IsString, validate } from "ts-validator";

class User {
  @IsString("The phone number must be a string")
  @IsPhone("+244", "Must be a valid phone number for Angola")
  phone!: string;
}

const user = new User();
user.phone = "+244943162154";

try {
  const validatedUser = validate(user);
  console.log("Validated data:", validatedUser);
} catch (error: any) {
  console.error("Validation error:", error.message);
}
```

## Available Decorators

### String

- `@IsString(errorMessage?: string)`
- `@IsAlpha(errorMessage?: string)`
- `@IsAlphaNumeric(errorMessage?: string)`
- `@IsLowercase(errorMessage?: string)`
- `@IsUppercase(errorMessage?: string)`
- `@IsEmpty(errorMessage?: string)`
- `@IsUrl(errorMessage?: string)`
- `@IsUUID(errorMessage?: string)`
- `@IsMaxLength(value: number, errorMessage?: string)`
- `@IsMinLength(value: number, errorMessage?: string)`
- `@IsNull(errorMessage?: string)`
- `@IsUndefined(errorMessage?: string)`

### Number

- `@IsNumber(errorMessage?: string)`
- `@IsInteger(errorMessage?: string)`
- `@IsPositive(errorMessage?: string)`
- `@IsNegative(errorMessage?: string)`
- `@IsMax(value: number, errorMessage?: string)`
- `@IsMin(value: number, errorMessage?: string)`
- `@IsEnum(enumObject: object, errorMessage?: string)`

### General

- `@IsBoolean(errorMessage?: string)`
- `@IsDate(errorMessage?: string)`
- `@IsMaxDate(date: Date, errorMessage?: string)`
- `@IsMinDate(date: Date, errorMessage?: string)`
- `@IsArray(errorMessage?: string)`
- `@IsObject(errorMessage?: string)`
- `@IsFunction(errorMessage?: string)`
- `@IsProperty(key: string, errorMessage?: string)`
- `@IsJSON(errorMessage?: string)`

### Custom

- `@IsEmail(provider: EmailProvider, errorMessage?: string)`
- `@IsPhone(countryCode: PhoneCountryCode, errorMessage?: string)`
- `@IsIban(errorMessage?: string)`
- `@IsPassport(errorMessage?: string)`
- `@IsIdentityCard(errorMessage?: string)`

## Supported Types

### Countries (`Country`)

`"AF" | "AO" | "AR" | "AU" | "BR" | "CA" | "CN" | "DE" | "ES" | "FR" | "GB" | "IN" | "IT" | "JP" | "MX" | "PT" | "RU" | "US" | "ZA"`

### Email Providers (`EmailProvider`)

`"Generic Email" | "Gmail" | "Hotmail/Outlook" | "Yahoo" | "ProtonMail" | "Yandex" | "iCloud" | "Zoho Mail" | "GMX" | "Mail.ru" | "Japan (docomo)" | "China (163.com)" | "Brazil (UOL)" | "South Korea (Naver)" | "Germany (Web.de)" | "France (Orange)" | "United Kingdom (BT Internet)"`

### Phone Country Codes (`PhoneCountryCode`)

`"+93" | "+244" | "+54" | "+61" | "+55" | "+1" | "+86" | "+49" | "+34" | "+33" | "+44" | "+91" | "+39" | "+81" | "+52" | "+351" | "+7" | "+27"`

## Conclusion

**TS-Validator** simplifies data validation in TypeScript classes, ensuring that all properties have correct values before use. This prevents runtime errors and improves system reliability.
