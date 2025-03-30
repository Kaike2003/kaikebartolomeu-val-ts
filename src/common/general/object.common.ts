import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsObject(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "object" || value === null || Array.isArray(value)) {
        throw new ValidationError(message || `Property "${key}" must be an object.`);
      }
    });
  };
}
