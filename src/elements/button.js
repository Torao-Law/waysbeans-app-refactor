import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    const {className, isPrimary, isLarge, isMedium, hasShadow, onClick, children, style} = props
    const primaryStyle = "bg-isPrimary text-white border-isPrimary";
    const secondaryStyle = "border-isPrimary text-isPrimary";
    const defaultStyle = "border-2 border-solid rounded px-8 py-2 m-0 font-medium";

    const buttonClasses = [
        isPrimary ? `${primaryStyle}  ${defaultStyle}` : `${secondaryStyle} ${defaultStyle}`,
        isLarge ? "w-96" : isMedium ? "w-64" : "",
        hasShadow ? "shadow shadow-lime-300" : "",
        className || "",
    ].join(" ");

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <button className={buttonClasses} onClick={handleClick} style={style}>
            {children}
        </button>
    );
};

Button.propTypes = {
  className: PropTypes.string,
  isPrimary: PropTypes.bool,
  isLarge: PropTypes.bool,
  isMedium: PropTypes.bool,
  hasShadow: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
