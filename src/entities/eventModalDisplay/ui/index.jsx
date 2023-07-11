import React from 'react';
import './EventModalDisplay.css';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SubjectIcon from '@mui/icons-material/Subject';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import dayjs from 'dayjs';
import { Button } from '../../../shared/ui';
import { useEventDisplay } from '../model/useEventDisplay';

export const EventModalDisplay = () => {
  const {daySelected, selectedEvent, selectedLabel, closeEventDisplay, deleteEventDisplay, editEventDisplay} = useEventDisplay();

  return (
    <div className='event-modal'>
      <div className='event-display'>
        <div className='event-display__header' >
          <Button
            classStyle={'event-display__edit'}
            handleClick={(e) => {
              editEventDisplay(e);
            }}
            children={<EditIcon />}
          />
          <Button
            classStyle={'event-display__delete'}
            handleClick={deleteEventDisplay}
            children={<DeleteOutlineOutlinedIcon />}
          />
          <Button
            classStyle={'event-modal__close'}
            handleClick={closeEventDisplay}
            children={<CloseIcon />}
          />
        </div>
        {selectedEvent &&
        <div className='event-display__elements'>
          <div className='event-display__element'>
            <div style={{alignSelf: 'flex-start', width: '1.25rem'}}>
              <span className='event-display__span' style={{backgroundColor: selectedLabel, marginTop: '0.375rem'}}/>
            </div>
            <div>
              <h2 className='event-display__title'>
                {selectedEvent.title}
              </h2>
              <div className='event-display__date'>
                {dayjs(daySelected).format('dddd, MMMM D')}
              </div>
            </div>
          </div>
          {selectedEvent.description && 
          <div className='event-display__element'>
            <SubjectIcon className='event-display__element-left'/>
            {selectedEvent.description}
          </div>}
          <div className='event-display__element'>
            <EventIcon className='event-display__element-left'/>
            Eugene Zanevskij
          </div>
          <div className='event-display__element'>
            <WorkOutlineIcon className='event-display__element-left'/>
            Busy
          </div>
        </div>}
      </div>
    </div>
  );
};