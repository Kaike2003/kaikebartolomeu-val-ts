import { registerValidation } from "../validationMetadata";

export function HasProperty(property: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!value || typeof value !== "object" || !(property in value)) {
        throw new Error(`Property "${key}" must contain the property "${property}".`);
      }
    });
  };
}
