# TS-Validator - Official Documentation (English)

[🇬🇧 English Version](README.md) | [🇵🇹 Portuguese Version](README.pt.md)

TS-Validator is a powerful and flexible TypeScript data validation library, allowing the definition of validation rules using decorators. It supports validation of strings, numbers, arrays, objects, enums, dates, and much more.

Created by **Kaike Bartolomeu**.

## Installation

To install the library, use:

```sh
npm install ts-validator
pnpm add ts-validator
yarn add ts-validator
```

## Basic Usage

Use validation decorators on your class properties and call the `validate()` function to check for errors.

```ts
import { validate, MinLength, MaxLength, IsEmail, IsAlphaNumeric, IsPhone, IsEnum } from "ts-validator";

enum UserType {
  ADMIN = "admin",
  CLIENT = "client",
  GUEST = "guest",
}

class User {
  @IsEmail("Gmail")
  email!: string;

  @MinLength(8)
  @MaxLength(20)
  password!: string;

  @IsAlphaNumeric()
  username!: string;

  @IsPhone("+55")
  phone!: string;

  @IsEnum(UserType)
  type!: UserType;
}

const user = new User();
user.email = "example@gmail.com";
user.password = "password123";
user.username = "user2024";
user.phone = "+559999999999";
user.type = UserType.CLIENT;

console.log(validate(user));
```

---

## Example: Document and Personal Contact Validation

```ts
import { IsEmail, IsIban, IsIdentityCard, IsPassport, IsPhone, validate, IsEnum } from "ts-validator";

enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

class Person {
  @IsEmail("Gmail")
  email!: string;

  @IsIban("AO")
  iban!: string;

  @IsPassport("AO")
  passport!: string;

  @IsIdentityCard("AO")
  idCard!: string;

  @IsPhone("+244")
  phone!: string;

  @IsEnum(Gender)
  gender!: Gender;
}

const person = new Person();
person.email = "kaike@gmail.com";
person.iban = "AO06123456789012345678901";
person.passport = "A1234567";
person.idCard = "123456789LA001";
person.phone = "+244923456789";
person.gender = Gender.MALE;

try {
  console.log(validate(person));
} catch (error) {
  console.log(error);
}
```

---

## Available Decorators

### **String Validation**

- `@IsEmail(provider?: string)` - Validates an email.
- `@IsIban(countryCode: string)` - Validates an IBAN for a specific country.
- `@IsIdentityCard(countryCode: string)` - Validates an identity card number.
- `@IsPassport(countryCode: string)` - Validates a passport number.
- `@IsPhone(countryCode: string)` - Validates a phone number.
- `@MinLength(n: number)` - Sets a minimum length.
- `@MaxLength(n: number)` - Sets a maximum length.
- `@IsAlpha()` - Allows only letters.
- `@IsAlphaNumeric()` - Allows only letters and numbers.
- `@IsLowercase()` - Allows only lowercase letters.
- `@IsUppercase()` - Allows only uppercase letters.
- `@Matches(regex: RegExp)` - Validates against a regex pattern.

### **Number Validation**

- `@IsInteger()` - Validates an integer.
- `@IsPositive()` - Allows only positive numbers.
- `@IsNegative()` - Allows only negative numbers.
- `@Min(n: number)` - Sets a minimum value.
- `@Max(n: number)` - Sets a maximum value.
- `@IsNumber()` - Ensures it is a number.
- `@IsEnum(enumType: any)` - Validates an enum.

### **Array Validation**

- `@IsArray()` - Ensures it is an array.
- `@ArrayMinSize(n: number)` - Sets a minimum size.
- `@ArrayMaxSize(n: number)` - Sets a maximum size.
- `@ArrayNotEmpty()` - Ensures it is not empty.

### **Object Validation**

- `@IsObject()` - Validates if it is an object.
- `@IsJson()` - Validates JSON.
- `@HasProperty(prop: string)` - Checks for the existence of a property.

### **Date Validation**

- `@IsDate()` - Ensures it is a date.
- `@MinDate(date: Date)` - Sets a minimum date.
- `@MaxDate(date: Date)` - Sets a maximum date.

### **Boolean Validation**

- `@IsBoolean()` - Ensures it is a boolean.

### **Custom Validation**

- `@CustomValidate(validatorFn: (value: any) => boolean | string)` - Allows custom validation logic.

---

## Error Handling

```ts
try {
  validate(user);
} catch (error) {
  console.error("Validation failed:", error);
}
```

---

## Portuguese Version

[🇵🇹 Access the Portuguese documentation](README.md)
