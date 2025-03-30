import { registerValidation } from "../validationMetadata";

export function IsJSON() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      try {
        JSON.parse(value);
      } catch {
        throw new Error(`Property "${key}" must be a valid JSON string.`);
      }
    });
  };
}
