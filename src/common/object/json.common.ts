import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsJSON(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string") {
        throw new ValidationError(message || `Property "${key}" must be a valid JSON string.`);
      }

      try {
        JSON.parse(value);
      } catch {
        throw new ValidationError(message || `Property "${key}" must be a valid JSON string.`);
      }
    });
  };
}
