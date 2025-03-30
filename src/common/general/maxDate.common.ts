import { registerValidation } from "../validationMetadata";

export function MaxDate(maxDate: Date) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!(value instanceof Date) || value.getTime() > maxDate.getTime()) {
        throw new Error(`Property "${key}" must be on or before ${maxDate.toISOString()}.`);
      }
    });
  };
}
