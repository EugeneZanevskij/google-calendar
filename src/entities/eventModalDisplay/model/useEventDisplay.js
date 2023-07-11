import { useContext } from 'react'
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
  return ({
    daySelected,
    selectedEvent,
    selectedLabel,
    closeEventDisplay,
    deleteEventDisplay,
    editEventDisplay
  })
}
