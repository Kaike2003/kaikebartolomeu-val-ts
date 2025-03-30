import { registerValidation } from "../validationMetadata";

export function IsString() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (typeof value !== "string") {
        throw new Error(`Property "${key}" must be a string.`);
      }
    });
  };
}
