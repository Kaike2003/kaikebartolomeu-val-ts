import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsNegative(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "number" || value >= 0) {
        throw new ValidationError(message || `Property "${key}" must be a negative number.`);
      }
    });
  };
}
