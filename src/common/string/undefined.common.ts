import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsUndefined(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value !== undefined) {
        throw new ValidationError(message || `Property "${key}" must be undefined.`);
      }
    });
  };
}
