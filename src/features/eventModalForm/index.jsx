import React, { useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import CloseIcon from '@mui/icons-material/Close';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckIcon from '@mui/icons-material/Check';
import SubjectIcon from '@mui/icons-material/Subject';
import "./EventModalForm.css";
import dayjs from 'dayjs';

const labels = ['red', 'green', 'blue',  'purple', 'pink', 'orange'];

const EventModalForm = () => {
  const {setShowEventModal, daySelected, setDaySelected, dispatchCalEvents, selectedEvent} = useContext(GlobalContext);
  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ''
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ''
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent ? labels.find(label => label === selectedEvent.label) : labels[0]
  );
  function handleSubmit (e) {
    e.preventDefault();
    const calEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected,
      id: selectedEvent ? selectedEvent.id : Date.now()
    };
    calEvent.title = calEvent.title ? calEvent.title : '(No title)';
    if (selectedEvent) {
      dispatchCalEvents({
        type: 'update',
        payload: calEvent
      });
    } else {
    dispatchCalEvents({
      type: 'push',
      payload: calEvent
    })
    };
    setShowEventModal(false);
  };

  return (
    <div className='event-modal'>
      <form className='event-modal__form' onSubmit={handleSubmit}>
        <div className='event-modal__header' >
          <button onClick={() => setShowEventModal(false)} className='event-modal__close'>
            <CloseIcon/>
          </button>
        </div>
        <div className='event-modal__element'>
          <input 
            type='text'
            name='title'
            placeholder='Add title'
            className='event-modal__input event-modal__input--title'
            required
            autoFocus
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className='event-modal__elements'>
        <div className='event-modal__element'>
          <ScheduleIcon/>
          <div className='event-modal__inputs'>
            <input 
              type="date"
              placeholder='Add date'
              value={daySelected.format('YYYY-MM-DD')}
              onChange={(e) => { setDaySelected(dayjs(e.target.value));}}
              className='event-modal__input-date'
            />
          </div>
        </div>
        <div className='event-modal__element'>
          <SubjectIcon/>
          <div className='event-modal__inputs'>
            <textarea
              name='description'
              placeholder='Add description'
              className='event-modal__input event-modal__textarea'
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className='event-modal__element' style={{justifyContent: 'center'}}> 
          {labels.map((label, i) => (
            <span
              key={i}
              onClick={() => setSelectedLabel(label)}
              className='event-modal__label' 
              style={{backgroundColor: label}}>
                {selectedLabel === label && <CheckIcon/>}
              </span>
          ))}
        </div>
        <button onClick={handleSubmit} type='submit' className='event-modal__save'>
          {selectedEvent ? 'Update' : 'Save'}
        </button>
      </div>
      </form>
    </div>
  );
};

export default EventModalForm;
