import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    const {className, isPrimary, isLarge, isMedium, hasShadow, onClick, children} = props
    const primaryStyle = "bg-lime-950 text-white border-lime-950";
    const secondaryStyle = "border-lime-950 text-lime-950";
    const defaultStyle = "border-2 border-solid rounded px-8 py-0 m-0 font-medium";

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
        <button className={buttonClasses} onClick={handleClick}>
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
