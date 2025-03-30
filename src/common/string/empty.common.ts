import { registerValidation } from "../validationMetadata";

export function IsEmpty() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (value !== "" && value !== null && value !== undefined && value !== 0) {
        throw new Error(`Property "${key}" must be empty.`);
      }
    });
  };
}
