import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";

import SelectSubject from "./SelectSubject";
import SelectTeacher from "./SelectTeacher";
import HomeworkDescription from "./HomeworkDescription";
import HomeworkType from "./HomeworkType";
import HomeworkDatei from "./HomeworkDatei";

function HomeworksModalCreate({ setShowCreateHomeworkModal }) {
  const {
    setHomeworkDescription,
    teacherId,
    databaseUpdated,
    setDatabaseUpdated,
    setMessageBackend,
    messageBackendModal,
    setMessageBackendModal,
    setSubjectId,
    subjectId,
    homeworkDescription,
    homeworkType,
    urlHomework,
    fileNameHomework,
    homeworkUploaded,
    setHomeworkUploaded,
    addHomeworkToDatabase,
  } = useContext(Context);

  const [title, setTitle] = useState("");

  function addHomework(e) {
    e.preventDefault();

    if (
      teacherId === "" ||
      subjectId === "" ||
      title === "" ||
      homeworkDescription === "" ||
      homeworkType === ""
    ) {
      setMessageBackendModal("Bitte füllen Sie die Felder aus");

      return;
    }

    const data = {
      subject: subjectId,
      title: title,
      fileName: fileNameHomework,
      link: urlHomework,
      description: homeworkDescription,
      type: homeworkType,
      teacher: teacherId,
    };
    // console.log("dataHomework", data);

    if (data.length !== 0) {
      addHomeworkToDatabase(data)
        .then((res) => {
          if (res.message === "success") {
            setMessageBackend("Neue Datei hinzugefügt!");
          } else {
            setMessageBackend(res.message);
          }
          setDatabaseUpdated(!databaseUpdated);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    setShowCreateHomeworkModal(false);
    setMessageBackend("");
    setTitle("");
    setSubjectId("");
    setHomeworkDescription("");
    setHomeworkUploaded(false);
    setMessageBackendModal("");
  }

  useEffect(() => {
    setMessageBackendModal("");
    setMessageBackend("");
  }, []);

  return (
    <div
      className="absolute inset-0 flex justify-center
     items-center "
    >
      <div
        className="flex flex-col p-4 w-1/2 bg-white justify-between items-center
       relative rounded-xl shadow-2xl"
      >
        <button
          onClick={() => setShowCreateHomeworkModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
           hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Neue Datei</h3>

        <form className="w-full max-w-md mt-8">
        

          <SelectTeacher />
          <SelectSubject />

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label
                className="block text-gray-500 font-bold md:text-right 
                mb-1 md:mb-0 pr-4"
                htmlFor="inline-name"
              >
                Title
              </label>
            </div>
            <div className="md:w-3/4">
              <input
                className="bg-gray-200 appearance-none border-2 
                border-gray-200 rounded w-full py-2 px-4
                 text-gray-700 leading-tight focus:outline-none 
                 focus:bg-white focus:border-green-500"
                id="inline-name"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Präpositionen..."
              />
            </div>
          </div>

          <HomeworkDescription />

          <HomeworkType />

          <HomeworkDatei />

          <div className="flex justify-end">
            {!homeworkUploaded && (
              <button
                className="flex  px-4 py-2 m-4 rounded-2xl bg-green-200 
           items-center justify-center transition-all text-white"
                disabled
              >
                Datei Hinzufügen
              </button>
            )}
            {homeworkUploaded && (
              <button
                onClick={(e) => addHomework(e)}
                className="flex  px-4 py-2 m-4 rounded-2xl bg-green-200 
           items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
              >
                Neue Datei Hinzufügen
              </button>
            )}
          </div>
        </form>

        <p className=" m-4 text-orange-500">{messageBackendModal}</p>
      </div>
    </div>
  );
}

export default HomeworksModalCreate;
