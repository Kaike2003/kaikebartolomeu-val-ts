import { registerValidation } from "../validationMetadata";

export function ArrayMaxSize(size: number) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Array.isArray(value) || value.length > size) {
        throw new Error(`Property "${key}" must contain at most ${size} elements.`);
      }
    });
  };
}
