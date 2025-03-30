import { registerValidation } from "../validationMetadata";

export function IsBoolean() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "boolean") {
        throw new Error(`Property "${key}" must be a boolean.`);
      }
    });
  };
}
