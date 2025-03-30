import { registerValidation } from "../validationMetadata";

export function IsObject() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "object" || value === null || Array.isArray(value)) {
        throw new Error(`Property "${key}" must be an object.`);
      }
    });
  };
}
