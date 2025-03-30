import { registerValidation } from "../validationMetadata";

export function IsUndefined() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value !== undefined) {
        throw new Error(`Property "${key}" must be undefined.`);
      }
    });
  };
}
