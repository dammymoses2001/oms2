import PropTypes from "prop-types";
import React, { useState } from "react";
import { ReactComponent as Eye } from "../../../assets/icons/hide-eye.svg";

export const Password = ({
    className,
    inputClassName,
    placeholder,
    labelClassName,
    label,
    error,
    bgColor = "transparent",
    isdisabled,
    isLoading,
    name,
    size = "lg",
    hint,
    value,
    onChange,
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className={`form-outline mb-4 ${className}`}>
            {label && (
                <label
                    className={`form-label ${labelClassName}`}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <div className="position-relative">
                <input
                    name={name}
                    type={visible ? "text" : "password"}
                    placeholder={placeholder}
                    disabled={isdisabled || isLoading}
                    id={name}
                    value={value}
                    onChange={onChange}
                    autoComplete="off"
                    className={`form-control form-control-${size} ${inputClassName}`}
                    style={{
                        backgroundColor: bgColor,
                        paddingRight: "65px"
                    }}
                    {...props}
                />
                <span
                    style={{
                        cursor: "pointer",
                        marginLeft: "25px",
                        opacity: visible ? 0.6 : 0.3,
                        outline: "none",
                        position: "absolute",
                        right: "5%",
                        top: "30%"
                    }}
                    role="button"
                    tabIndex={-1}
                    onClick={() => setVisible(!visible)}
                    onKeyDown={() => setVisible(!visible)}
                >
                    <Eye />
                </span>
            </div>
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

Password.propTypes = {
    bgColor: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.string,
    hint: PropTypes.string,
    inputClassName: PropTypes.string,
    isdisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    label: PropTypes.string,
    labelClassName: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};
