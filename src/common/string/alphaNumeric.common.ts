import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsAlphaNumeric(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string" || !/^[A-Za-z0-9]+$/.test(value)) {
        throw new ValidationError(message || `Property "${key}" must contain only letters and numbers.`);
      }
    });
  };
}
