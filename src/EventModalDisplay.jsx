import React, { useContext } from 'react';
import GlobalContext from './context/GlobalContext';
import './EventModalForm.css';
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
      <div className='event-modal__form'>
        <div className='event-modal__header' >
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowEventModal(true);
              setDisplayEvent(false);
            }}
            className='event-modal__edit'
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
            className='event-modal__delete'
            >
            <DeleteIcon/>
          </button>
          <button onClick={() => setDisplayEvent(false)} className='event-modal__close'>
            <CloseIcon/>
          </button>
        </div>
        {selectedEvent &&
        <div className='event-modal__elements'>
          <div className='event-modal__element'>
            <span className='event-modal__span' style={{backgroundColor: selectedLabel}}/>
            <div>
              <h2 className='event-modal__title'>
                {selectedEvent.title}
              </h2>
              <div className='event-modal__date'>
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
