import { useMemo, useState } from "react";

import { PasswordInputProps as Props } from "./PasswordInput.types";
import { buildClassName, getTextFromType } from "./PasswordInput.helpers";
import { buildValidationObject } from "./PasswordInput.helpers";
import { validatePasswordFromType } from "./PasswordInput.helpers";
import "./PasswordInput.styles.css";

import validImage from "@/assets/valid.png";
import invalidImage from "@/assets/invalid.png";
import viewImage from "@/assets/view.png";
import hideImage from "@/assets/hide.png";

const PasswordInput: React.FC<Props> = (props) => {
  const { toggleMask = true } = props ?? {};
  const { options: optionsProp } = props;
  const { parentClassName } = props;

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const options = useMemo(() => [...new Set(optionsProp)], [optionsProp]);

  const validRules = useMemo(() => {
    const validateObject = buildValidationObject();

    options.forEach((option) => {
      const validate = validatePasswordFromType(password, option);
      validateObject[option] = validate;
      validateObject.isValid = validate && validateObject.isValid;
    });

    return validateObject;
  }, [options, password]);

  const renderRules = () => {
    return options.map((option) => {
      const isValid = validRules[option];

      return (
        <div key={option} className="PasswordInput__rule">
          <img
            className={`PasswordInput__status ${buildClassName(
              parentClassName,
              "status"
            )}`}
            src={isValid ? validImage : invalidImage}
            alt={isValid ? "valid" : "invalid"}
          />
          <span>{getTextFromType(option)}</span>
        </div>
      );
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const cleanedValue = value.replace(/\s/g, "");
    console.log({ cleanedValue, value });
    setPassword(event.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`PasswordInput__container ${buildClassName(
        parentClassName,
        "container"
      )}`}
    >
      <div
        className={`PasswordInput__input-wrapper  ${buildClassName(
          parentClassName,
          "input-wrapper"
        )} `}
      >
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className={`PasswordInput__input ${buildClassName(
            parentClassName,
            "input"
          )}`}
          placeholder="Password"
          aria-description="Password input"
        />
        {toggleMask ? (
          <div
            onClick={handleTogglePassword}
            className={`PasswordInput__visibility ${buildClassName(
              parentClassName,
              "visibility"
            )}`}
          >
            {showPassword ? (
              <img
                className={`PasswordInput__toggle ${buildClassName(
                  parentClassName,
                  "toggle"
                )}`}
                src={hideImage}
              />
            ) : (
              <img
                className={`PasswordInput__toggle ${buildClassName(
                  parentClassName,
                  "toggle"
                )}`}
                src={viewImage}
              />
            )}
          </div>
        ) : null}
      </div>
      <div
        className={`PasswordInput__rule-wrapper ${buildClassName(
          parentClassName,
          "rule-wrapper"
        )}`}
      >
        {renderRules()}
      </div>
    </div>
  );
};

export default PasswordInput;
