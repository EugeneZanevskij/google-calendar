import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext';
import { Label } from '../../shared/ui/index';
import './style.css';

const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  return (
    <div className="labels">
    <p className="labels__title">Labels</p>
    {labels.map(({ label: lbl, checked }, idx) => (
      <Label lbl={lbl} checked={checked} idx={idx} updateLabel={() => updateLabel({ label: lbl, checked: !checked })} />
    ))}
    </div>
  )
}

export default Labels