import React, { useContext } from 'react';
import './style.css';
import AddIcon from '@mui/icons-material/Add';
import GlobalContext from '../../context/GlobalContext';

const CreateEventButton = () => {
  const {setShowEventModal} = useContext(GlobalContext);
  return (
    <button onClick={() => setShowEventModal(true)} className='create-event'>
      <AddIcon/>
      Create Event
    </button>
  )
}

export default CreateEventButton