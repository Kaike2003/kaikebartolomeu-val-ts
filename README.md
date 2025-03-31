# @kaikebartolomeu/val-ts Documentation

> 📚 Available languages: [English](README.md) | [Português](README.pt.md)

## Introduction

**@kaikebartolomeu/val-ts** is a lightweight TypeScript library that enables automatic validation of class properties. Using decorators, it ensures that assigned values follow predefined formats, such as emails, IBANs, passports, identity documents, and phone numbers. Additionally, the `validate` function checks whether all properties of an instance are valid before use.

All decorators now support custom error messages, allowing for more user-friendly validation feedback.

**Author:** Kaike Bartolomeu

## Installation

```sh
npm install @kaikebartolomeu/val-ts
yarn add @kaikebartolomeu/val-ts
pnpm add @kaikebartolomeu/val-ts
```

## Usage

### Basic Example

```typescript
import { IsPhone, IsString, validate } from "@kaikebartolomeu/val-ts";

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

await validate(user)
  .then((validatedUser) => {
    console.log("Validated data:", validatedUser);
  })
  .catch((error) => {
    console.error("Validation error:", error);
  });
```

### Advanced Example with Custom Error Messages

```typescript
import { IsPhone, IsString, validate } from "@kaikebartolomeu/val-ts";

class User {
  @IsString("The phone number must be a string")
  @IsPhone("+244", "Must be a valid phone number for Angola")
  phone!: string;
}

const user = new User();
user.phone = "+244943162154";

await validate(user)
  .then((validatedUser) => {
    console.log("Validated data:", validatedUser);
  })
  .catch((error) => {
    console.error("Validation error:", error);
  });
```

### Example with Express

```typescript
import express, { Request, Response } from "express";
import { validate } from "@kaikebartolomeu/val-ts";

export class User {
  @IsString("The email must be a string")
  @IsEmail("Gmail", "The provider must be Gmail")
  email!: string;

  @IsString("The IBAN must be a string")
  @IsIban("AO")
  iban!: string;

  @IsString("The passport must be a string")
  @IsPassport("AO")
  passport!: string;

  @IsString("The phone number must be a string")
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
    res.status(400).json({ error: "Validation error", details: error });
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port: ${port}`));
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

### Countries (Country)

"AF" | "AO" | "AR" | "AU" | "BR" | "CA" | "CN" | "DE" | "ES" | "FR" | "GB" | "IN" | "IT" | "JP" | "MX" | "PT" | "RU" | "US" | "ZA"

### Email Providers (EmailProvider)

"Generic Email" | "Gmail" | "Hotmail/Outlook" | "Yahoo" | "ProtonMail" | "Yandex" | "iCloud" | "Zoho Mail" | "GMX" | "Mail.ru" | "Japan (docomo)" | "China (163.com)" | "Brazil (UOL)" | "South Korea (Naver)" | "Germany (Web.de)" | "France (Orange)" | "United Kingdom (BT Internet)"

### Phone Country Codes (PhoneCountryCode)

"+93" | "+244" | "+54" | "+61" | "+55" | "+1" | "+86" | "+49" | "+34" | "+33" | "+44" | "+91" | "+39" | "+81" | "+52" | "+351" | "+7" | "+27"

## Conclusion

**@kaikebartolomeu/val-ts** simplifies data validation in TypeScript classes, ensuring that all properties have correct values before use. This prevents runtime errors and improves system reliability.
