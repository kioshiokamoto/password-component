import { InputValidation, PasswordRulesEnum } from "./PasswordInput.types";

export const getTextFromType = (type: PasswordRulesEnum): string => {
  switch (type) {
    case "hasNoConsecutiveLetter":
      return "Has no consecutive letters";
    case "hasNumber":
      return "Has a number 0-9";
    case "hasSpecialChar":
      return "Has a special char !@#$%^&*()_+.";
    case "hasUpperCase":
      return "Has an uppercase letter";
    default:
      return "Rule";
  }
};

export const validatePasswordFromType = (
  password: string,
  type: PasswordRulesEnum
): boolean => {
  switch (type) {
    case "hasNoConsecutiveLetter":
      return !/(.)\1/.test(password) && password.length > 1;
    case "hasNumber":
      return /[0-9]/.test(password);
    case "hasSpecialChar":
      return /[^A-Za-z0-9]/g.test(password);
    case "hasUpperCase":
      return /[A-Z]/.test(password);
    default:
      return false;
  }
};

export const buildValidationObject = (): InputValidation => {
  return {
    hasNoConsecutiveLetter: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasUpperCase: false,
    isValid: true,
  };
};

export const buildClassName = (
  parentClassName: string | undefined,
  element: string
) => `${parentClassName ? `${parentClassName}__${element}` : ""}`;
