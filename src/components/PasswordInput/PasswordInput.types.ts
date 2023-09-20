export const PasswordRulesConst = {
  hasNumber: "hasNumber",
  hasSpecialChar: "hasSpecialChar",
  hasUpperCase: "hasUpperCase",
  hasNoConsecutiveLetter: "hasNoConsecutiveLetter",
} as const;

export type PasswordRulesEnum =
  (typeof PasswordRulesConst)[keyof typeof PasswordRulesConst];

export interface InputValidation
  extends Partial<Record<keyof typeof PasswordRulesConst, boolean>> {
  isValid: boolean;
}

export interface PasswordInputProps extends React.HTMLProps<HTMLInputElement> {
  toggleMask?: boolean;
  options: PasswordRulesEnum[];
  parentClassName?: string;
}
