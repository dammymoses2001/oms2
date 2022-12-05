import PropTypes from "prop-types";
import React from "react";
import ReactSelect from "react-select";
import CreatableSelect from "react-select/creatable";

export const Select = ({
    className,
    onChange,
    options,
    isMulti,
    value,
    disabled,
    bgColor = "transparent",
    error,
    hint,
    label,
    labelClassName,
    isLoading,
    defaultValue,
    addNew,
    placeholder,
    borderRadius,
    padding
}) => {
    const customStyles = {
        container: (provided) => ({
            ...provided
        }),
        control: (provided) => ({
            ...provided,
            backgroundClip: "padding-box",
            backgroundColor: bgColor,
            border: "1px solid #ced4da",
            borderRadius: !borderRadius?"25px":borderRadius,
            padding: !padding?"0.375rem 0.75rem":padding
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none"
        }),
        input: (provided) => ({
            ...provided,

            width: "100%"
        }),

        menu: (provided) => ({
            ...provided,
            borderRadius: "0px 0px 15px 15px ",
            padding: "0.375rem 0.75rem",
            top: "-20"
        })
    };

    return (
        <div className={`form-outline mb-4 ${className}`}>
            {label && (
                <label
                    className={`form-label ${labelClassName}`}
                    
                >
                    {label}
                </label>
            )}
            {addNew ? (
                <CreatableSelect
                    placeholder={placeholder}
                    value={value}
                    isDisabled={disabled}
                    isLoading={isLoading}
                    onChange={onChange}
                    options={options}
                    defaultValue={options?.find(
                        (option) => option?.value === defaultValue
                    )}
                    onCreateOption={addNew}
                    styles={customStyles}
                    isMulti={isMulti}
                />
            ) : (
                <ReactSelect
                    placeholder={placeholder}
                    value={value}
                    isDisabled={disabled}
                    isLoading={isLoading}
                    onChange={onChange}
                    options={options}
                    defaultValue={options?.find(
                        (option) => option?.value === defaultValue
                    )}
                    styles={customStyles}
                    isMulti={isMulti}
                />
            )}
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
                    className="font-helvetica px-3 mt-2 font-italic"
                    style={{ color: "#8b8a8a", fontWeight: 500 }}
                >
                    {error}
                </p>
            )}
        </div>
    );
};

Select.propTypes = {
    addNew: PropTypes.func,
    bgColor: PropTypes.string,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    height: PropTypes.string,
    hint: PropTypes.string,
    isLoading: PropTypes.bool,
    isMulti: PropTypes.bool,
    label: PropTypes.string,
    labelClassName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};
