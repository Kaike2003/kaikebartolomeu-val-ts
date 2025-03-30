import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsBoolean(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "boolean") {
        throw new ValidationError(message || `Property "${key}" must be a boolean.`);
      }
    });
  };
}
