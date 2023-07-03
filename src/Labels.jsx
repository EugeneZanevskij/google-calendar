import React, { useContext } from 'react'
import GlobalContext from './context/GlobalContext';
import './Labels.css';

const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  return (
    <>
    <h2>Labels</h2>
    {labels.map(({ label: lbl, checked }, idx) => (
      <label key={idx} className="labels">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => updateLabel({ label: lbl, checked: !checked })}
          className={`labels__checkbox`}
        />
        <span 
          className={`labels__text`}
          style={{ color: lbl }}
        >
          {lbl}
        </span>
      </label>
    ))}
    </>
  )
}

export default Labels