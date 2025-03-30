import { registerValidation } from "../validationMetadata";

export function IsEnum(enumType: object) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Object.values(enumType).includes(value)) {
        throw new Error(`Property "${key}" must be a valid enum value.`);
      }
    });
  };
}
