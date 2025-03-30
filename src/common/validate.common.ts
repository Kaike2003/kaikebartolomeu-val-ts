import { validationMetadata } from "./validationMetadata";

export function validate<T extends object>(instance: T): Record<string, any> {
  for (const key of Object.keys(instance)) {
    const propertyKey = `${instance.constructor.name}.${key}`;
    if (validationMetadata.has(propertyKey)) {
      for (const validator of validationMetadata.get(propertyKey)!) {
        validator((instance as any)[key]);
      }
    }
  }
  return { ...instance };
}
