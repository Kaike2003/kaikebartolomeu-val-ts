import { registerValidation } from "../validationMetadata";

export function IsPositive() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "number" || value <= 0) {
        throw new Error(`Property "${key}" must be a positive number.`);
      }
    });
  };
}
