import { validationMetadata } from "../validationMetadata";

export function MaxLength(length: number) {
  return (target: any, key: string) => {
    const propertyKey = `${target.constructor.name}.${key}`;
    if (!validationMetadata.has(propertyKey)) {
      validationMetadata.set(propertyKey, []);
    }

    validationMetadata.get(propertyKey)!.push((value: string) => {
      if (value.length > length) {
        throw new Error(`Property "${key}" must have at least ${length} characters.`);
      }
    });
  };
}
