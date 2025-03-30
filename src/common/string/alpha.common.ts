import { registerValidation } from "../validationMetadata";

export function IsAlpha() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!/^[A-Za-z]+$/.test(value)) {
        throw new Error(`Property "${key}" must contain only letters.`);
      }
    });
  };
}
