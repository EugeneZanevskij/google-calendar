import React, { useContext } from 'react'
import GlobalContext from './context/GlobalContext';
import './Labels.css';

const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  return (
    <div className="labels">
    <p className="labels__title">Labels</p>
    {labels.map(({ label: lbl, checked }, idx) => (
      <label key={idx} className="labels__labels">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => updateLabel({ label: lbl, checked: !checked })}
          className='labels__checkbox'
        />
        <span 
          className={`labels__text`}
          style={{ color: lbl }}
        >
          {lbl}
        </span>
      </label>
    ))}
    </div>
  )
}

export default Labels