import PropTypes from "prop-types";
import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export const PhoneInput = ({
    className,
    placeholder,
    labelClassName,
    label,
    error,
    hint,
    bgColor = "transparent",
    isdisabled,
    isLoading,
    name,
    value,
    onChange,
    ...props
}) => {
    return (
        <div className={` mb-4 ${className}`}>
            {label && (
                <label
                    className={`form-label ${labelClassName}`}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}
            <ReactPhoneInput
                inputProps={{
                    disabled: isdisabled,
                    loading: isLoading,
                    name,
                    onChange,
                    placeholder,
                    value
                }}
                inputStyle={{
                    backgroundClip: "padding-box",
                    backgroundColor: bgColor,
                    border: "none",
                    borderRadius: "25px",
                    fontFamily: "Poppins",
                    fontSize: "100%",
                    height: "100%",
                    width: "100%"
                }}
                defaultCountry={"ng"}
                enableSearch
                disableSearchIcon
                searchStyle={{
                    color: "#000",
                    height: "40px",
                    padding: "0.375rem 0.75rem",
                    width: "95%"
                }}
                buttonStyle={{
                    backgroundColor: bgColor,
                    border: "none",
                    boxShadow: "none",
                    outline: "none"
                }}
                containerStyle={{
                    border: "1px solid #ced4da",
                    borderRadius: "5rem",
                    height: "calc(1.5em + 2rem )",
                    lineHeight: 1.5,

                    width: "100%"
                }}
                defaultErrorMessage="Invalid phone number"
                search
                value={value}
                onChange={() => onChange({ target: { name, value } })}
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

PhoneInput.propTypes = {
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
