import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsNumber(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "number") {
        throw new ValidationError(message || `Property "${key}" must be a number.`);
      }
    });
  };
}
