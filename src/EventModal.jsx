import React, { useState, useContext } from 'react';
import GlobalContext from './context/GlobalContext';
import './EventModal.css';
import CloseIcon from '@mui/icons-material/Close';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import "./EventModal.css";

const labels = ['red', 'green', 'blue',  'purple', 'pink', 'orange'];

const EventModal = () => {
  const {setShowEventModal, daySelected, dispatchCalEvents, selectedEvent} = useContext(GlobalContext);
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
      <form className='event-modal__form'>
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
        <div className='event-modal__element'>
          <p>Title</p>
          <input 
            type='text'
            name='title'
            placeholder='Add title'
            className='event-modal__input'
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
        </div>
        <div className='event-modal__element'>
          <ScheduleIcon/>
          <p>{daySelected.format('dddd, MMMM DD')}</p>
        </div>
        <div className='event-modal__element'>
          <p>Description</p>
          <input 
            type='text'
            name='description'
            placeholder='Add description'
            className='event-modal__input'
            required
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className='event-modal__element'> 
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
          Create
        </button>
      </form>
    </div>
  )
}


export default EventModal;