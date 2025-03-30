import { registerValidation } from "../validationMetadata";

export function IsArrayNotEmpty() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!Array.isArray(value) || value.length === 0) {
        throw new Error(`Property "${key}" must not be an empty array.`);
      }
    });
  };
}
