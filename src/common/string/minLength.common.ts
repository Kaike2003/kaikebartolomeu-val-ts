import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function MinLength(length: number, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string" || value.length < length) {
        throw new ValidationError(message || `Property "${key}" must have at least ${length} characters.`);
      }
    });
  };
}
