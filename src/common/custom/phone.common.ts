import { phoneRegexList } from "../../data/phone";
import { PhoneCountryCode } from "../../types/phone";
import { registerValidation } from "../validationMetadata";

export function IsPhone(country: PhoneCountryCode) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = phoneRegexList.find((e) => e.country === country);
      if (!identity) throw new Error("Phone country code not supported.");
      if (!identity.regex.test(value)) throw new Error("Invalid phone number.");
    });
  };
}
