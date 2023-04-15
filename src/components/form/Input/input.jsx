import PropTypes from "prop-types";
import React from "react";

import { Password } from "./Password";
import { PhoneInput } from "./Phone";
import { Select } from "./Select";

export const Input2 = ({
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
    onChange,
    required,
    ...props
}) => {
    return (
        <div className={` mb-4 ${className}`}>
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
                placeholder={placeholder||`Enter ${label||''}`}
                 disabled={isdisabled || isLoading}
                id={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                className={` w-100 ${size} ${inputclassname}`}
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

Input2.propTypes = {
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

Input2.Password = Password;
Input2.Phone = PhoneInput;
Input2.Select = Select;
