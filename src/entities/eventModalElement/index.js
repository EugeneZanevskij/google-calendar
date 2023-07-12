import React from "react";

export const EventModalElement = ({ icon, children }) => {
  return (
    <div className="event-modal__element">
      {icon}
      <div className="event-modal__inputs">{children}</div>
    </div>
  );
};
