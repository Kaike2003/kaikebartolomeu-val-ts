import { passportRegexList } from "../../data/passport";
import { Country } from "../../types/country";
import { registerValidation } from "../validationMetadata";

export function IsPassport(country: Country) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = passportRegexList.find((e) => e.country === country);
      if (!identity) throw new Error("Country not supported.");
      if (!identity.regex.test(value)) throw new Error("Invalid passport.");
    });
  };
}
