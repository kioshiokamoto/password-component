import { useMemo, useState } from "react";
import { PasswordInputProps as Props } from "./PasswordInput.types";
import { PasswordRulesConst } from "./PasswordInput.types";

const PasswordInput: React.FC<Props> = (props) => {
  const { toggleMask = true } = props ?? {};
  const { options: optionsProp } = props;
  const { parentClassName } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const options = useMemo(() => [...new Set(optionsProp)], [optionsProp]);

  const validRules = useMemo(() => {
    const validateObject: Partial<
      Record<keyof typeof PasswordRulesConst, boolean>
    > = {
      hasNoConsecutiveLetter: false,
      hasNumber: false,
      hasSpecialChar: false,
      hasUpperCase: false,
    };

    options.forEach((option) => {
      if (option === "hasNoConsecutiveLetter") {
        const validate = !/(.)\1/.test(password) && password.length > 1;
        validateObject.hasNoConsecutiveLetter = validate;
      }
      if (option === "hasNumber") {
        const validate = /[0-9]/.test(password);
        validateObject.hasNumber = validate;
      }
      if (option === "hasSpecialChar") {
        const validate = /[^A-Za-z0-9]/.test(password);
        validateObject.hasSpecialChar = validate;
      }
      if (option === "hasUpperCase") {
        const validate = /[A-Z]/.test(password);
        validateObject.hasUpperCase = validate;
      }
    });
    return validateObject;
  }, [options, password]);

  const renderRules = () => {
    return options.map((option) => {
      const isValid = validRules[option];

      return (
        <div key={option}>
          {isValid ? <div>Valid</div> : <div>Invalid</div>}
          <span>Has {option}</span>
        </div>
      );
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div
      className={`PasswordInput__container ${
        parentClassName ? `${parentClassName}-container` : ""
      }`}
    >
      <div>
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
        />
        {toggleMask ? <div onClick={handleTogglePassword}>Toggle</div> : null}
        {renderRules()}
      </div>
    </div>
  );
};

export default PasswordInput;
