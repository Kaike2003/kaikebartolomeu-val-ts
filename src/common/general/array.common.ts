import { ValidationError } from "../../validation/validation";
import { validationMetadata } from "../validationMetadata";

export function IsArray(itemType?: "string" | "number" | "boolean", message?: string) {
  return function (target: any, propertyKey: string) {
    const propertyKeyFull = `${target.constructor.name}.${propertyKey}`;

    if (!validationMetadata.has(propertyKeyFull)) {
      validationMetadata.set(propertyKeyFull, []);
    }

    validationMetadata.get(propertyKeyFull)!.push((value: any) => {
      if (!Array.isArray(value)) {
        throw new ValidationError(message || `Property "${propertyKey}" must be an array.`);
      }

      // Se um tipo específico foi fornecido, validamos cada elemento
      if (itemType) {
        for (const item of value) {
          if (typeof item !== itemType) {
            throw new ValidationError(message || `Property "${propertyKey}" must contain only ${itemType} elements.`);
          }
        }
      }
    });
  };
}
