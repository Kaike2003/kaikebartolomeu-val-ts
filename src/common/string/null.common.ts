import { registerValidation } from "../validationMetadata";

export function IsNull() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value !== null) {
        throw new Error(`Property "${key}" must be null.`);
      }
    });
  };
}
