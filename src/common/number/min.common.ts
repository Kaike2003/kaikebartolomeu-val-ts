import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function Min(value: number, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (propValue: any) => {
      if (typeof propValue !== "number" || propValue < value) {
        throw new ValidationError(message || `Property "${key}" must be at least ${value}.`);
      }
    });
  };
}
