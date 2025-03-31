import { validationMetadata } from "./validationMetadata";

export function validate<T extends object>(instance: T): Promise<T> {
  return new Promise((resolve, reject) => {
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

    // Se houver erros, rejeitamos a Promise com os erros
    if (Object.keys(errors).length > 0) {
      reject(errors);
    } else {
      // Se não houver erros, resolvemos a Promise com a instância original
      resolve(instance);
    }
  });
}
