import React from "react";

export const Accordion = ({
  styling,
  title,
  icon,
  handleAccordion,
  children,
}) => {
  return (
    <>
      <div className={styling} onClick={handleAccordion}>
        {title}
        {icon}
      </div>
      {children}
    </>
  );
};
