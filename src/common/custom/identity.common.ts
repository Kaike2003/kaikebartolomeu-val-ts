import { identityRegex } from "../../data/bi";
import { Country } from "../../types/country";
import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsIdentityCard(country: Country, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = identityRegex.find((e) => e.country === country);
      if (!identity) {
        throw new ValidationError(message || `Country "${country}" is not supported.`);
      }
      if (!identity.regex.test(value)) {
        throw new ValidationError(message || `Invalid identity card format for country "${country}".`);
      }
    });
  };
}
