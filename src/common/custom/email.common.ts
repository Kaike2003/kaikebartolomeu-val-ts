import { emailRegexPatterns } from "../../data/email";
import { EmailProvider } from "../../types/email";
import { ValidationError } from "../../validation/validation";
import { registerValidation } from "../validationMetadata";

export function IsEmail(provider: EmailProvider, message?: string) {
  return (target: any, key: string) => {
    registerValidation(target, key, (value: string) => {
      const identity = emailRegexPatterns.find((e) => e.provider === provider);
      if (!identity) {
        throw new ValidationError(message || `Provider "${provider}" is not supported.`);
      }
      if (!identity.regex.test(value)) {
        throw new ValidationError(message || `Invalid email format for provider "${provider}".`);
      }
    });
  };
}
