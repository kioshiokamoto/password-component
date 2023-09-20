export const PasswordRulesConst = {
  hasNumber: "hasNumber",
  hasSpecialChar: "hasSpecialChar",
  hasUpperCase: "hasUpperCase",
  hasNoConsecutiveLetter: "hasNoConsecutiveLetter",
} as const;

type PasswordRulesEnum =
  (typeof PasswordRulesConst)[keyof typeof PasswordRulesConst];

export interface PasswordInputProps {
  toggleMask?: boolean;
  options: PasswordRulesEnum[];
  customRules?: RegExp[];
  parentClassName?: string;
}
