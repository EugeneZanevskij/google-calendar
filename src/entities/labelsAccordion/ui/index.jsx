import React, { useContext } from 'react'
import GlobalContext from '../../../context/GlobalContext';
import { LabelCheckbox } from '../../../shared/ui';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './style.css';
import { Accordion } from '../../../shared/ui';
import { useLabels } from '../model/index';

const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  const {isActive, handleClick, getIconClass} = useLabels();
  // const [isActive, setIsActive] = useState(true);
  return (
    <div className="labels">
    <Accordion 
      styling="labels__title"
      title="Labels" 
      icon={<ArrowDropDownIcon className={getIconClass}/>}
      handleAccordion={handleClick}
      children={isActive &&
        labels.map(({ label: lbl, checked }, idx) => (
          <LabelCheckbox lbl={lbl} checked={checked} idx={idx} updateLabel={() => updateLabel({ label: lbl, checked: !checked })} />
        ))}
        />
    {/* {isActive &&
    labels.map(({ label: lbl, checked }, idx) => (
      <LabelCheckbox lbl={lbl} checked={checked} idx={idx} updateLabel={() => updateLabel({ label: lbl, checked: !checked })} />
    ))} */}
    </div>
  )
}

export default Labels