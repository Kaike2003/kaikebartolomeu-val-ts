import { passportRegexList } from "../../data/passport";
import { Country } from "../../types/country";
import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsPassport(country: Country, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = passportRegexList.find((e) => e.country === country);
      if (!identity) {
        throw new ValidationError(message || `Country "${country}" is not supported.`);
      }
      if (!identity.regex.test(value)) {
        throw new ValidationError(message || `Invalid passport format for country "${country}".`);
      }
    });
  };
}
