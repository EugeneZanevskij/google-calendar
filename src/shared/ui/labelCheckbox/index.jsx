import React from 'react';
import './style.css';

export const LabelCheckbox = ({label, checked, updateLabel}) => {
  return (
    <label className="label-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={updateLabel}
          className='label-checkbox__input'
          style={{ accentColor: label }}
        />
        <span 
          className='label-checkbox__text'
        >
          {label}
        </span>
      </label>
  )
};
