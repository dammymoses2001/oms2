import PropTypes from "prop-types";
import React from "react";

import { Input2 } from "./input";
import { Password } from "./Password";
import { PhoneInput } from "./Phone";

import { Select } from "./Select";


export const Input = ({
    type = "text",
    className,
    inputclassname,
    placeholder,
    labelclassname,
    label,
    bgColor = "transparent",
    hint,
    error,
    color,
    isdisabled,
    isLoading,
    name,
    size = "lg",
    value,
    required,
    onChange,
    ...props
}) => {
    return (
        <div className={`form-outline mb-4 ${className}`}>
            {label && (
                <label
                    className={`form-label ${labelclassname}`}
                    htmlFor={name}
                > 
                    {label}{required && <span className="text-danger">*</span>}
                </label>
            )}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                disabled={isdisabled || isLoading}
                id={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                className={`form-control  form-control-${size} ${inputclassname}`}
                style={{ backgroundColor: bgColor, color }}
                {...props}
            />
            {hint && (
                <p
                    className="font-helvetica px-3 mt-2 font-italic"
                    style={{ color: "#8b8a8a", fontWeight: 500 }}
                >
                    {hint}
                </p>
            )}
            {error && (
                <p
                    className="font-helvetica small px-3 mt-2 "
                    style={{ color: "red", fontWeight: 500 }}
                >
                    {error}
                </p>
            )}
        </div>
    );
};

Input.propTypes = {
    bgColor: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    error: PropTypes.string,
    hint: PropTypes.string,
    inputclassname: PropTypes.string,
    isdisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    labelclassname: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.any,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any
};

Input.Password = Password;
Input.Input2 = Input2;
Input.Phone = PhoneInput;
Input.Select = Select;

