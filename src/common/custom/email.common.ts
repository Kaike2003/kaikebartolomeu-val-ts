import { emailRegexPatterns } from "../../data/email";
import { EmailProvider } from "../../types/email";
import { registerValidation } from "../validationMetadata";

export function IsEmail(provider: EmailProvider) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = emailRegexPatterns.find((e) => e.provider === provider);
      if (!identity) throw new Error("Provider not supported.");
      if (!identity.regex.test(value)) throw new Error("Invalid email.");
    });
  };
}
