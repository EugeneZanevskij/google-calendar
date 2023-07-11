import { useContext } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import GlobalContext from '../../../context/GlobalContext';

export const useEventDisplay = () => {
  const labels = ['red', 'green', 'blue',  'purple', 'pink', 'orange'];
  const { setShowEventModal, setDisplayEvent, daySelected, dispatchCalEvents, selectedEvent, setSelectedEvent } = useContext(GlobalContext);
  const selectedLabel = labels.find(label => label === selectedEvent.label);

  function closeEventDisplay() {
    setDisplayEvent(false);
    setSelectedEvent(null);
  }
  function deleteEventDisplay() {
    dispatchCalEvents({
      type: 'delete',
      payload: selectedEvent
    });
    closeEventDisplay();
  }

  function editEventDisplay(e) {
    e.preventDefault();
    setShowEventModal(true);
    setDisplayEvent(false);
  }

  const buttons = [
    {
      classStyle: 'event-display__edit',
      handleClick: (e) => {
        editEventDisplay(e);
      },
      children: <EditIcon />
    },
    {
      classStyle: 'event-display__delete',
      handleClick: deleteEventDisplay,
      children: <DeleteOutlineOutlinedIcon />
    },
    {
      classStyle: 'event-modal__close',
      handleClick: closeEventDisplay,
      children: <CloseIcon />
    }
  ];
  return ({
    daySelected,
    selectedEvent,
    selectedLabel,
    buttons
  })
}
