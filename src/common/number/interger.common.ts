import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsInteger(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Number.isInteger(value)) {
        throw new ValidationError(message || `Property "${key}" must be an integer.`);
      }
    });
  };
}
