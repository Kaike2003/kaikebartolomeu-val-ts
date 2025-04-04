import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsNotNull(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value === null) {
        throw new ValidationError(message || `Property "${key}" must not be null.`);
      }
    });
  };
}
