import { registerValidation } from "../validationMetadata";

export function IsLowerCase() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value !== value.toLowerCase()) {
        throw new Error(`Property "${key}" must be lowercase.`);
      }
    });
  };
}
