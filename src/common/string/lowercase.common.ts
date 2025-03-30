import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsLowerCase(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string" || value !== value.toLowerCase()) {
        throw new ValidationError(message || `Property "${key}" must be lowercase.`);
      }
    });
  };
}
