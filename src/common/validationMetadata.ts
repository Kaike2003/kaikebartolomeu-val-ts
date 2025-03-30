export const validationMetadata = new Map<string, ((value: any) => void)[]>();

export function registerValidation(target: any, key: string, validator: (value: any) => void) {
  const propertyKey = `${target.constructor.name}.${key}`;
  if (!validationMetadata.has(propertyKey)) {
    validationMetadata.set(propertyKey, []);
  }
  validationMetadata.get(propertyKey)!.push(validator);
}
