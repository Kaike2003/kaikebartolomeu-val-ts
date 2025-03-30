import { registerValidation } from "../validationMetadata";

export function IsDate() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!(value instanceof Date) || isNaN(value.getTime())) {
        throw new Error(`Property "${key}" must be a valid date.`);
      }
    });
  };
}
