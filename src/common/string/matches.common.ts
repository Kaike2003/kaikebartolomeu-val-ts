import { registerValidation } from "../validationMetadata";

export function Matches(regex: RegExp) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!regex.test(value)) {
        throw new Error(`Property "${key}" does not match the required pattern.`);
      }
    });
  };
}
