import { registerValidation } from "../validationMetadata";

export function IsFunction() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "function") {
        throw new Error(`Property "${key}" must be a function.`);
      }
    });
  };
}
