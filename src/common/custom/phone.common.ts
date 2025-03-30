import { phoneRegexList } from "../../data/phone";
import { PhoneCountryCode } from "../../types/phone";
import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsPhone(country: PhoneCountryCode, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = phoneRegexList.find((e) => e.country === country);
      if (!identity) {
        throw new ValidationError(message || `Phone country code "${country}" is not supported.`);
      }
      if (!identity.regex.test(value)) {
        throw new ValidationError(message || `Invalid phone number format for country "${country}".`);
      }
    });
  };
}
