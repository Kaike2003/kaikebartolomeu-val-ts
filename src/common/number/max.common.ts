import { registerValidation } from "../validationMetadata";

export function Max(value: number) {
  return (target: any, key: string) => {
    registerValidation(target, key, (propValue: any) => {
      if (typeof propValue !== "number" || propValue > value) {
        throw new Error(`Property "${key}" must be at most ${value}.`);
      }
    });
  };
}
