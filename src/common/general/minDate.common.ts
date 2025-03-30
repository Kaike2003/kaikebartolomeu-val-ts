import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function MinDate(minDate: Date, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!(value instanceof Date) || value.getTime() < minDate.getTime()) {
        throw new ValidationError(message || `Property "${key}" must be on or after ${minDate.toISOString()}.`);
      }
    });
  };
}
