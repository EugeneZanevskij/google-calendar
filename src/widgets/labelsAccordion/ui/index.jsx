import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './style.css';
import { Accordion } from '../../../shared/ui';
import { useLabels } from '../model/index';
import { LabelsList } from '../../../entities/labelsList';

const LabelsAccordion = () => {
  const {isActive, handleClick, getIconClass} = useLabels();
  return (
    <div className="labels">
    <Accordion 
      styling="labels__title"
      title="Labels" 
      icon={<ArrowDropDownIcon className={getIconClass}/>}
      handleAccordion={handleClick}
      children={<LabelsList isActive={isActive} />}
        />
    {/* {isActive &&
    labels.map(({ label: lbl, checked }, idx) => (
      <LabelCheckbox lbl={lbl} checked={checked} idx={idx} updateLabel={() => updateLabel({ label: lbl, checked: !checked })} />
    ))} */}
    </div>
  )
}

export default LabelsAccordion