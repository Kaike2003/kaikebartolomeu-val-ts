import { ValidationError } from "../../validation/validation";
import { validationMetadata } from "../validationMetadata";

export function MaxLength(length: number, message?: string) {
  return (target: any, key: string) => {
    const propertyKey = `${target.constructor.name}.${key}`;

    if (!validationMetadata.has(propertyKey)) {
      validationMetadata.set(propertyKey, []);
    }

    validationMetadata.get(propertyKey)!.push((value: string) => {
      if (typeof value !== "string" || value.length > length) {
        throw new ValidationError(message || `Property "${key}" must have at most ${length} characters.`);
      }
    });
  };
}
