import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";
import { MdDragHandle } from "react-icons/md";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";

export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    eventToDB,
    updateEvent,
    deleteEvent,
  } = useContext(Context);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

// console.log(daySelected);

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      date: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent._id : Date.now(),
    };



    console.log("selectedEvent ", daySelected);

    if(selectedEvent) {
      updateEvent(calendarEvent)
      .then(() => {
        console.log('das ist mein calendar event', calendarEvent, 'selectedEvent', selectedEvent);
        dispatchCalEvent({type: "update", payload: calendarEvent});
      })  
    } else {
      eventToDB(calendarEvent)
        .then(() => {
          dispatchCalEvent({ type: "push" , payload: calendarEvent });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }

    setShowEventModal(false);
  }
  async function handleDelete(e) {
    const calendarEvent = {
      title,
      description,
      date: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent._id : Date.now(),
    };
    e.preventDefault();

    await deleteEvent(calendarEvent);
    dispatchCalEvent({ type: "delete", payload: calendarEvent});
    setShowEventModal(false);
  }
  
  
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <MdDragHandle />
          </span>
          <div className="flex">
            {selectedEvent && (
              <span
                onClick={
                  handleDelete}
                className="text-gray-400 cursor-pointer"
              >
                <AiOutlineDelete className="hover:text-red-600 text-lg text-bold" />
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className=" text-gray-400">
                <AiOutlineClose className="hover:text-gray-600" />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Titel Hinzufügen"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{daySelected.format("YYYY, MMMM DD")}</p>
            <input
              type="text"
              name="description"
              placeholder="Beschreibung Hinzufügen"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Speichern
          </button>
        </footer>
      </form>
    </div>
  );
}
