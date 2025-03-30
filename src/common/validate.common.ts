import { validationMetadata } from "./validationMetadata";

export function validate<T extends object>(instance: T): T | Record<string, string[]> {
  const errors: Record<string, string[]> = {};

  for (const key of Object.keys(instance)) {
    const propertyKey = `${instance.constructor.name}.${key}`;

    if (validationMetadata.has(propertyKey)) {
      for (const validator of validationMetadata.get(propertyKey)!) {
        try {
          validator((instance as any)[key]);
        } catch (error) {
          if (!errors[key]) {
            errors[key] = [];
          }
          errors[key].push(error instanceof Error ? error.message : String(error));
        }
      }
    }
  }

  // Se houver erros, retornamos o objeto de erros
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // Se não houver erros, retornamos o próprio objeto original
  return instance;
}
