import { ibanRegexPatterns } from "../../data/iban";
import { Country } from "../../types/country";
import { registerValidation } from "../validationMetadata";

export function IsIban(country: Country) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = ibanRegexPatterns.find((e) => e.country === country);
      if (!identity) throw new Error("Country not supported.");
      if (!identity.regex.test(value)) throw new Error("Invalid IBAN.");
    });
  };
}
