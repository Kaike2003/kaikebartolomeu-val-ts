import { registerValidation } from "../validationMetadata";

export function IsInteger() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Number.isInteger(value)) {
        throw new Error(`Property "${key}" must be an integer.`);
      }
    });
  };
}
