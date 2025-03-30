import { registerValidation } from "../validationMetadata";

export function IsUpperCase() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value !== value.toUpperCase()) {
        throw new Error(`Property "${key}" must be uppercase.`);
      }
    });
  };
}
