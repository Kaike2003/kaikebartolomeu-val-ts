import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsEnum(enumType: object, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Object.values(enumType).includes(value)) {
        throw new ValidationError(message || `Property "${key}" must be a valid enum value.`);
      }
    });
  };
}
