export type ValidatorFunction = (value: any) => boolean | string;

export class CustomValidatorRegistry {
  private static validators = new Map<string, ValidatorFunction>();

  static register(name: string, validator: ValidatorFunction) {
    this.validators.set(name, validator);
  }

  static get(name: string): ValidatorFunction | undefined {
    return this.validators.get(name);
  }
}
