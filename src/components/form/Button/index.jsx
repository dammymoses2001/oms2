import PropTypes from "prop-types";
import React from "react";

export const Button = (props) => {
    const {
        type = "button",
        // variant = "info",
        isLoading,
        size = "lg",
        color,
        bgColor,
        borderColor,
        isDisabled,
        children,
        className,
        onClick,
        ...rest
    } = props;

    const classNames = `btn  btn-inline-block btn-${size} gradient-custom-4 ${color}  ${className}`;

    return (
        <button
            type={type}
            className={classNames}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            {...rest}
            style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor || bgColor}`,
                borderRadius: 50,
                boxShadow: "none",
                color: color,
                cursor: isDisabled && "default",
                fontSize: 14,
                fontWeight: 500,
                opacity: isDisabled ? 0.5 : 1,
                outline: "none",
                transition: "all 0.3s ease-in-out"
            }}
        >
            {isLoading ? (
                <span className="spinner-border spinner-border-sm" />
            ) : (
                children
            )}
        </button>
    );
};

Button.propTypes = {
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.string
};
