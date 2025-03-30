import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsString(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string") {
        throw new ValidationError(message || `Property "${key}" must be a string.`);
      }
    });
  };
}
