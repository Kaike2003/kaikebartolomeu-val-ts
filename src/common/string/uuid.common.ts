import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsUUID(message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)) {
        throw new ValidationError(message || `Property "${key}" must be a valid UUID.`);
      }
    });
  };
}
