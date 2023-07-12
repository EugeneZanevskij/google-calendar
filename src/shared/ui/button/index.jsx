import React from "react";

export const Button = ({ classStyle, handleClick, children }) => {
  return (
    <button onClick={handleClick} className={classStyle}>
      {children}
    </button>
  );
};
