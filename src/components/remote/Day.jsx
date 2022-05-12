import React from "react";
import SelectSubject from "./SelectSubject";
import HomeworkText from "./HomeworkText";
import SelectHomework from "./SelectHomework";
import { useContext } from "react";
import { Context } from "../../context/context";

function Day({ createDay }) {
  const weekDaysD = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

  const {
    subjectId,
    setMonday,
    setTuesday,
    setWednesday,
    setThursday,
    setFriday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    homeworkText,
    homeworkId,
    showDay,
    setShowDay,
    setMessageBackendModal,
    setSubjectId,
    setHomeworkText,
    setHomeworkId,
  } = useContext(Context);

  function createDayPayload(e) {
    e.preventDefault();
    if (subjectId === "") {
      setMessageBackendModal("Bitte wählen Sie ein Fach");
      return;
    }
    setShowDay(false);
    setMessageBackendModal("");

    const data = {
      subject: subjectId,
      homeworkText: homeworkText,
    };

    if (homeworkId.length !== 0) {
      data.homeworkData = homeworkId;
    }

    switch (createDay) {
      case 0:
        setMonday([...monday, data]);

        break;
      case 1:
        setTuesday([...tuesday, data]);
        break;
      case 2:
        setWednesday([...wednesday, data]);
        break;
      case 3:
        setThursday([...thursday, data]);
        break;
      case 4:
        setFriday([...friday, data]);
        break;

      default:
        break;
    }

    setSubjectId("");
    setHomeworkText("");
    setHomeworkId("");
  }

  if (showDay) {
    return (
      <div>
        <h3 className="font-semibold mt-4 text-center">
          {weekDaysD[createDay]}
        </h3>
        <SelectSubject />
        <HomeworkText />
        <SelectHomework />
        <div className="flex justify-end">
          <button
            className="flex px-2 py-2  rounded-2xl bg-green-200
            items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg
            visited:bg-green-300 visited:shadow-lg"
            onClick={(e) => createDayPayload(e)}
          >
            {weekDaysD[createDay]} speichern
          </button>
        </div>
      </div>
    );
  }
}

export default Day;
