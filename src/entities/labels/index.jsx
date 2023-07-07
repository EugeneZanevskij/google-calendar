import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext';
import { Label } from '../../shared/ui/index';
import './style.css';

const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="labels">
    <div className="labels__title" onClick={() => setIsActive(!isActive)}>Labels</div>
    {isActive &&
    labels.map(({ label: lbl, checked }, idx) => (
      <Label lbl={lbl} checked={checked} idx={idx} updateLabel={() => updateLabel({ label: lbl, checked: !checked })} />
    ))}
    </div>
  )
}

export default Labels