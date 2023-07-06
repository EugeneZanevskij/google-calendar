import React, { useContext, useState } from 'react';
import GlobalContext from './context/GlobalContext';
import './EventModal.css';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import SubjectIcon from '@mui/icons-material/Subject';
import dayjs from 'dayjs';

const labels = ['red', 'green', 'blue',  'purple', 'pink', 'orange'];

const EventModalDisplay = () => {
  const { setShowEventModal, daySelected, dispatchCalEvents, selectedEvent } = useContext(GlobalContext);
  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ''
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ''
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent ? labels.find(label => label === selectedEvent.label) : labels[0]
  );

  return (
    <div className='event-modal'>
      <div className='event-modal__form'>
        <div className='event-modal__header' >
          <button onClick={() => setShowEventModal(false)} className='event-modal__close'>
            <CloseIcon/>
          </button>
          <button
            onClick={() => {
              dispatchCalEvents({
                type: 'delete',
                payload: selectedEvent
              });
              setShowEventModal(false);
          }}
            className='event-modal__delete'
            >
            <DeleteIcon/>
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
