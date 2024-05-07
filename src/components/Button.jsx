import React from "react";

const Button = ({
  bgColor,
  borderColor,
  hoverBg,
  text,

  children,
  ...rest
}) => {
  return (
    <button
      className={`shadow-lg mx-auto  block mb-12  px-4 py-2 border-2   rounded-tr-full rounded-bl-full ml-auto bg-${bgColor} border-2 border-${borderColor}  hover:bg-${hoverBg}-dark focus:outline-none  focus:ring-${borderColor}-light hover:bg-${hoverBg} `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
