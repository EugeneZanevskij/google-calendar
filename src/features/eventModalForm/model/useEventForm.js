import { useContext, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";

export const useEventForm = () => {
  const labels = ["red", "green", "blue", "purple", "pink", "orange"];

  const {
    setShowEventModal,
    daySelected,
    setDaySelected,
    dispatchCalEvents,
    selectedEvent,
  } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labels.find((label) => label === selectedEvent.label)
      : labels[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected,
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    calEvent.title = calEvent.title ? calEvent.title : "(No title)";
    if (selectedEvent) {
      dispatchCalEvents({
        type: "update",
        payload: calEvent,
      });
    } else {
      dispatchCalEvents({
        type: "push",
        payload: calEvent,
      });
    }
    setShowEventModal(false);
  }

  function closeEventForm() {
    setShowEventModal(false);
  }

  return {
    labels,
    title,
    description,
    selectedLabel,
    daySelected,
    setTitle,
    setDescription,
    setSelectedLabel,
    setDaySelected,
    closeEventForm,
    handleSubmit,
  };
};
