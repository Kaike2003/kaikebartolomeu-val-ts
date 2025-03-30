import { registerValidation } from "../validationMetadata";

export function IsUUID() {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: any) => {
      if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)) {
        throw new Error(`Property "${key}" must be a valid UUID.`);
      }
    });
  };
}
