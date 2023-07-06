import React, { useContext } from 'react';
import GlobalContext from './context/GlobalContext';
import './EventModalDisplay.css';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SubjectIcon from '@mui/icons-material/Subject';
import dayjs from 'dayjs';

const labels = ['red', 'green', 'blue',  'purple', 'pink', 'orange'];

const EventModalDisplay = () => {
  const { setShowEventModal, setDisplayEvent, daySelected, dispatchCalEvents, selectedEvent } = useContext(GlobalContext);
  const selectedLabel = labels.find(label => label === selectedEvent.label);

  return (
    <div className='event-modal'>
      <div className='event-display'>
        <div className='event-display__header' >
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowEventModal(true);
              setDisplayEvent(false);
            }}
            className='event-display__edit'
            >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              dispatchCalEvents({
                type: 'delete',
                payload: selectedEvent
              });
              setDisplayEvent(false);
          }}
            className='event-display__delete'
            >
            <DeleteIcon/>
          </button>
          <button onClick={() => setDisplayEvent(false)} className='event-modal__close'>
            <CloseIcon/>
          </button>
        </div>
        {selectedEvent &&
        <div className='event-display__elements'>
          <div className='event-display__element'>
            <span className='event-display__span' style={{backgroundColor: selectedLabel, marginTop: '0.375rem'}}/>
            <div>
              <h2 className='event-display__title'>
                {selectedEvent.title}
              </h2>
              <div className='event-display__date'>
                {dayjs(daySelected).format('dddd, MMMM D')}
              </div>
            </div>
          </div>
          <div className='event-modal__element'>
            <SubjectIcon/>
            {selectedEvent.description}
          </div>
        </div>}
      </div>
    </div>
  );
};

export default EventModalDisplay;
