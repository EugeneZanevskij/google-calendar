import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './style.css';
import { Accordion } from '../../../shared/ui';
import { useLabelsAccordion } from '../model/index';
import { LabelsList } from '../../../entities/labelsList';

export const LabelsAccordion = () => {
  const {isActive, handleClick, getIconClass} = useLabelsAccordion();
  return (
    <div className="labels">
      <Accordion 
        styling="labels__title"
        title="Labels" 
        icon={<ArrowDropDownIcon className={getIconClass}/>}
        handleAccordion={handleClick}
        children={<LabelsList isActive={isActive} />}
      />
    </div>
  )
}