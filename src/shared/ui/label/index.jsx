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
        />
        <span 
          className={`labels__text`}
          style={{ color: lbl }}
        >
          {lbl}
        </span>
      </label>
  )
};
