import React, { useState, useContext } from 'react';
import GlobalContext from './context/GlobalContext';
import './EventModal.css';
import CloseIcon from '@mui/icons-material/Close';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import "./EventModal.css";
import dayjs from 'dayjs';

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
  const [isFormEdit, setIsFormEdit] = useState(false);

  return (
    <div className='event-modal'>
      <form className='event-modal__form' onSubmit={handleSubmit}>
        <button onClick={() => setShowEventModal(false)} className='event-modal__close'>
          <CloseIcon/>
        </button>
        {selectedEvent && <button
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
        </button>}
        {selectedEvent && <button
          onClick={(e) => {
            e.preventDefault();
            setIsFormEdit(!isFormEdit)
          }}
          className='event-modal__edit'
        >
          <EditIcon />
        </button>
        }
        {(isFormEdit || !selectedEvent) &&
          <div className='event-modal__elements'>
          <div className='event-modal__element'>
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
            <DescriptionIcon/>
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
            {selectedEvent ? 'Update' : 'Save'}
          </button>
        </div>}
        {selectedEvent && !isFormEdit &&
        <div className='event-modal__elements'>
          <div className='event-modal__element'>
            <span className='event-modal__span' style={{backgroundColor: selectedLabel}}/>
            <div>
              <h2 className='event-modal__title'>
                {title}
              </h2>
              <div className='event-modal__date'>
                {dayjs(daySelected).format('dddd, MMMM D')}
              </div>
            </div>
          </div>
          <div className='event-modal__element'>
            <DescriptionIcon/>
            {description}
          </div>
        </div>}
      </form>
    </div>
  )
}


export default EventModal;