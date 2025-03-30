import { registerValidation } from "../validationMetadata";

export function IsURL() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      try {
        new URL(value);
      } catch {
        throw new Error(`Property "${key}" must be a valid URL.`);
      }
    });
  };
}
