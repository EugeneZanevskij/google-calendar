import React from 'react';
import './style.css';

export const LabelCheckbox = ({lbl, checked, idx, updateLabel}) => {
  return (
    <label key={idx} className="label-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={updateLabel}
          className='label-checkbox__input'
          style={{ accentColor: lbl }}
        />
        <span 
          className='label-checkbox__text'
        >
          {lbl}
        </span>
      </label>
  )
};
