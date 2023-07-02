import React, { useState, useContext } from 'react';
import GlobalContext from './context/GlobalContext';
import './EventModal.css';
import CloseIcon from '@mui/icons-material/Close';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CheckIcon from '@mui/icons-material/Check';
import "./EventModal.css";

const labels = ['red', 'green', 'blue',  'purple', 'pink', 'orange'];

const EventModal = () => {
  const {setShowEventModal, daySelected} = useContext(GlobalContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLabel, setSelectedLabel] = useState(labels[0]);
  return (
    <div className='event-modal'>
      <form className='event-modal__form'>
        <button onClick={() => setShowEventModal(false)} className='event-modal__close'>
          <CloseIcon/>
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
        <button type='submit' className='event-modal__save'>
          Create
        </button>
      </form>
    </div>
  )
}

export default EventModal;