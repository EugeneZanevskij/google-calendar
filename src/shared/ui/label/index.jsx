import React from 'react';
import './style.css';

export const Label = ({lbl, checked, idx, updateLabel}) => {
  return (
    <label key={idx} className="labels__label">
        <input
          type="checkbox"
          checked={checked}
          onChange={updateLabel}
          className='labels__checkbox'
          style={{ accentColor: lbl }}
        />
        <span 
          className='labels__text'
        >
          {lbl}
        </span>
      </label>
  )
};
