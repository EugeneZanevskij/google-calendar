import React from "react";
import "./style.css";
import { Input } from "../../shared/ui";

export const LabelCheckbox = ({ label, checked, updateLabel }) => {
  return (
    <label className="label-checkbox">
      <Input
        type="checkbox"
        name="label-checkbox"
        classStyle="label-checkbox__input"
        onChange={updateLabel}
        style={{ accentColor: label }}
        checked={checked}
      />
      <span className="label-checkbox__text">{label}</span>
    </label>
  );
};
