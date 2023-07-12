import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SubjectIcon from "@mui/icons-material/Subject";
import "./EventModalForm.css";
import dayjs from "dayjs";
import { useEventForm } from "../model/useEventForm";
import { Button, Input } from "../../../shared/ui";
import { EventModalElement } from "../../../entities/eventModalElement";
import { LabelsInputs } from "../../../entities/LabelsInputs";

export const EventModalForm = () => {
  const {
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
  } = useEventForm();

  return (
    <div className="event-modal">
      <form className="event-modal__form" onSubmit={handleSubmit}>
        <div className="event-modal__header">
          <Button
            classStyle="event-modal__close"
            handleClick={closeEventForm}
            children={<CloseIcon />}
          />
        </div>
        <EventModalElement
          children={
            <Input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              classStyle="event-modal__input event-modal__input--title"
              onChange={(e) => setTitle(e.target.value)}
            />
          }
        />
        <div className="event-modal__elements">
          <EventModalElement
            icon={<ScheduleIcon />}
            children={
              <Input
                type="date"
                name="date"
                placeholder="Add date"
                value={daySelected.format("YYYY-MM-DD")}
                classStyle="event-modal__input-date"
                onChange={(e) => setDaySelected(dayjs(e.target.value))}
              />
            }
          />
          <EventModalElement
            icon={<SubjectIcon />}
            children={
              <textarea
                name="description"
                placeholder="Add description"
                value={description}
                className="event-modal__input event-modal__textarea"
                onChange={(e) => setDescription(e.target.value)}
              />
            }
          />
          <LabelsInputs
            labels={labels}
            selectedLabel={selectedLabel}
            setSelectedLabel={setSelectedLabel}
          />
          <Button
            classStyle="event-modal__save"
            handleClick={handleSubmit}
            children="Save"
          />
        </div>
      </form>
    </div>
  );
};
