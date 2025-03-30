import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function ArrayMinSize(size: number, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Array.isArray(value) || value.length < size) {
        throw new ValidationError(message || `Property "${key}" must contain at least ${size} elements.`);
      }
    });
  };
}
