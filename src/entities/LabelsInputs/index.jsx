import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { LabelInput } from '../../shared/ui';

export const LabelsInputs = ({labels, selectedLabel, setSelectedLabel}) => {
  return (
    <div className='event-modal__element' style={{justifyContent: 'center'}}> 
          {labels.map((label, i) => (
            <LabelInput
              key={i}
              style={{backgroundColor: label}}
              styleName='event-modal__label'
              handleLabelClick={() => setSelectedLabel(label)}
              children={selectedLabel === label && <CheckIcon/>}
            />
          ))}
        </div>
  )
}
