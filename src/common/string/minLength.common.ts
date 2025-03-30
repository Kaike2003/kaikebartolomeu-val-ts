import { registerValidation } from "../validationMetadata";

export function MinLength(length: number) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      if (value.length < length) {
        throw new Error(`Property "${key}" must have at least ${length} characters.`);
      }
    });
  };
}
