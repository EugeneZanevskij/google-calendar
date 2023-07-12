import React from "react";

export const Input = ({
  type,
  name,
  placeholder,
  value,
  classStyle,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      className={classStyle}
      onChange={onChange}
    />
  );
};
