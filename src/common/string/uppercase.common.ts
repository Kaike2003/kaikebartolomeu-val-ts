import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsUpperCase(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string" || value !== value.toUpperCase()) {
        throw new ValidationError(message || `Property "${key}" must be uppercase.`);
      }
    });
  };
}
