import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext';
import { LabelCheckbox } from '../../shared/ui';

export const LabelsList = ({isActive}) => {
  const {labels, updateLabel} = useContext(GlobalContext);
  return (
    <>
    {isActive && labels.map(({ label: lbl, checked }, idx) => (
      <LabelCheckbox lbl={lbl} checked={checked} idx={idx} updateLabel={() => updateLabel({ label: lbl, checked: !checked })} />
      ))}
    </>
  )
}
