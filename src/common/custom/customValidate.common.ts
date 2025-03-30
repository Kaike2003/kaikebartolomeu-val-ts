import { CustomValidatorRegistry } from "../customValidator.common";
import { validationMetadata } from "../validationMetadata";

export function CustomValidate(validatorName: string) {
  return function (target: any, propertyKey: string) {
    const propertyKeyFull = `${target.constructor.name}.${propertyKey}`;

    if (!validationMetadata.has(propertyKeyFull)) {
      validationMetadata.set(propertyKeyFull, []);
    }

    validationMetadata.get(propertyKeyFull)!.push((value: any) => {
      const validator = CustomValidatorRegistry.get(validatorName);
      if (validator) {
        const result = validator(value);
        if (result !== true) {
          throw new Error(`Validation failed for ${propertyKey}: ${result}`);
        }
      }
    });
  };
}
