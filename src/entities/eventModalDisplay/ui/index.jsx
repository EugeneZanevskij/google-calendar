import React from "react";
import "./EventModalDisplay.css";
import SubjectIcon from "@mui/icons-material/Subject";
import EventIcon from "@mui/icons-material/Event";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import dayjs from "dayjs";
import { Button, DisplayElement } from "../../../shared/ui";
import { useEventDisplay } from "../model/useEventDisplay";

export const EventModalDisplay = () => {
  const { daySelected, selectedEvent, selectedLabel, buttons } =
    useEventDisplay();

  return (
    <div className="event-modal">
      <div className="event-display">
        <div className="event-display__header">
          {buttons.map((button, i) => {
            return (
              <Button
                key={i}
                classStyle={button.classStyle}
                handleClick={button.handleClick}
                children={button.children}
              />
            );
          })}
        </div>
        {selectedEvent && (
          <div className="event-display__elements">
            <DisplayElement
              leftPart={
                <div style={{ alignSelf: "flex-start", width: "1.25rem" }}>
                  <span
                    className="event-display__span"
                    style={{
                      backgroundColor: selectedLabel,
                      marginTop: "0.375rem",
                    }}
                  />
                </div>
              }
              rightPart={
                <div>
                  <h2 className="event-display__title">
                    {selectedEvent.title}
                  </h2>
                  <div className="event-display__date">
                    {dayjs(daySelected).format("dddd, MMMM D")}
                  </div>
                </div>
              }
            />
            {selectedEvent.description && (
              <DisplayElement
                leftPart={
                  <SubjectIcon className="event-display__element-left" />
                }
                rightPart={selectedEvent.description}
              />
            )}
            <DisplayElement
              leftPart={<EventIcon className="event-display__element-left" />}
              rightPart="Eugene Zanevskij"
            />
            <DisplayElement
              leftPart={
                <WorkOutlineIcon className="event-display__element-left" />
              }
              rightPart="Busy"
            />
          </div>
        )}
      </div>
    </div>
  );
};
