import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsArrayNotEmpty(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Array.isArray(value) || value.length === 0) {
        throw new ValidationError(message || `Property "${key}" must not be an empty array.`);
      }
    });
  };
}
