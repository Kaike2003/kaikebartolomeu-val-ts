import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function Matches(regex: RegExp, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string" || !regex.test(value)) {
        throw new ValidationError(message || `Property "${key}" does not match the required pattern.`);
      }
    });
  };
}
