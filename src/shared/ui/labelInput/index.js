import React from "react";

export const LabelInput = ({
  styleName,
  style,
  handleLabelClick,
  children,
}) => {
  return (
    <span onClick={handleLabelClick} className={styleName} style={style}>
      {children}
    </span>
  );
};
