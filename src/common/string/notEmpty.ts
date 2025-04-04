import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsNotEmpty(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value === "" || value === null || value === undefined) {
        throw new ValidationError(message || `Property "${key}" must not be empty.`);
      }
    });
  };
}
