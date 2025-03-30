import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function ArrayMaxSize(size: number, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Array.isArray(value) || value.length > size) {
        throw new ValidationError(message || `Property "${key}" must contain at most ${size} elements.`);
      }
    });
  };
}
