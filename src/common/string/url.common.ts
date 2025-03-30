import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsURL(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      try {
        new URL(value);
      } catch {
        throw new ValidationError(message || `Property "${key}" must be a valid URL.`);
      }
    });
  };
}
