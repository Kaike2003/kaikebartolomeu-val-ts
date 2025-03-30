import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function HasProperty(property: string, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!value || typeof value !== "object") {
        throw new ValidationError(
          message || `Property "${key}" must be an object and contain the property "${property}".`
        );
      }

      if (!(property in value)) {
        throw new ValidationError(message || `Property "${key}" must contain the property "${property}".`);
      }
    });
  };
}
