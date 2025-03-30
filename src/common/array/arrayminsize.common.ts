import { registerValidation } from "../validationMetadata";

export function ArrayMinSize(size: number) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Array.isArray(value) || value.length < size) {
        throw new Error(`Property "${key}" must contain at least ${size} elements.`);
      }
    });
  };
}
