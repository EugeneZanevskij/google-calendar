import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext';
import { LabelCheckbox } from '../../shared/ui';

export const LabelsList = ({isActive}) => {
  const {labels, updateLabel} = useContext(GlobalContext);
  return (
    <>
    {isActive && labels.map(({ label, checked }, idx) => (
        <LabelCheckbox key={idx} label={label} checked={checked} updateLabel={() => updateLabel({ label, checked: !checked })} />
      ))}
    </>
  )
}
