import { registerValidation } from "../validationMetadata";

export function IsAlphanumeric() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        throw new Error(`Property "${key}" must contain only letters and numbers.`);
      }
    });
  };
}
