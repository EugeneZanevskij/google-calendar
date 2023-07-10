import React, { useContext } from 'react';
import './style.css';
import GlobalContext from '../../../context/GlobalContext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CreateEventButton = () => {
  const {setShowEventModal, openSidebar} = useContext(GlobalContext);
  return (
    <button onClick={() => setShowEventModal(true)} className={`create-event ${!openSidebar ? 'create-event--round' : ''}`}>
      <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
      <span className='create-event__container'>
        Create
        <span className='create-event__span'><ArrowDropDownIcon /></span>
      </span>
    </button>
  )
}

export default CreateEventButton