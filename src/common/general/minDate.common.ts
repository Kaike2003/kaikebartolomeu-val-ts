import { registerValidation } from "../validationMetadata";

export function MinDate(minDate: Date) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!(value instanceof Date) || value.getTime() < minDate.getTime()) {
        throw new Error(`Property "${key}" must be on or after ${minDate.toISOString()}.`);
      }
    });
  };
}
