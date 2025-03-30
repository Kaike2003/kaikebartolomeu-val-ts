import { registerValidation } from "../validationMetadata";

export function IsNumber() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "number") {
        throw new Error(`Property "${key}" must be a number.`);
      }
    });
  };
}
