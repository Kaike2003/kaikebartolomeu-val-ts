import { registerValidation } from "../validationMetadata";

export function Min(value: number) {
  return (target: any, key: string) => {
    registerValidation(target, key, (propValue) => {
      if (typeof propValue !== "number" || propValue < value) {
        throw new Error(`Property "${key}" must be at least ${value}.`);
      }
    });
  };
}
