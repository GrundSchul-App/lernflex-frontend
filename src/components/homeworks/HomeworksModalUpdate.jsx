import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";

import SelectSubjectUpdate from "./SelectSubjectUpdate";
import HomeworkDescriptionUpdate from "./HomeworkDescriptionUpdate";
import HomeworkTypeUpdate from "./HomeworkTypeUpdate";
import HomeworkDateiUpdate from "./HomeworkDateiUpdate";
import SelectTeacherUpdate from "./SelectTeacherUpdate";

function HomeworksModalUpdate({
  homeworkToUpdate,
  setShowUpdateHomeworkModal,
}) {
  const {
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

    updateHomeworkToDatabase,
  } = useContext(Context);

  const [title, setTitle] = useState("");

  function updateHomework(e) {
    e.preventDefault();

    if (
      (subjectId === "" && homeworkToUpdate.subject === "") ||
      (title === "" && homeworkToUpdate.title === "") ||
      (homeworkDescription === "" && homeworkToUpdate.description === "") ||
      (homeworkType === "" && homeworkToUpdate.type === "") ||
      (urlHomework === "" && homeworkToUpdate.link === "") ||
      (fileNameHomework === "" && homeworkToUpdate.fileName === "") ||
      (teacherId === "" && homeworkToUpdate.teacher === "")
    ) {
      setMessageBackendModal("Bitte füllen Sie die Felder aus");

      return;
    }

    const data = {
      _id: homeworkToUpdate._id,
      subject: subjectId || homeworkToUpdate.subject,
      title: title || homeworkToUpdate.title,
      fileName: fileNameHomework || homeworkToUpdate.fileName,
      link: urlHomework || homeworkToUpdate.link,
      description: homeworkDescription || homeworkToUpdate.description,
      type: homeworkType || homeworkToUpdate.type,
      teacher: teacherId || homeworkToUpdate.teacher,
    };
    // console.log("dataHomework", data);

    if (data.length !== 0) {
      updateHomeworkToDatabase(data)
        .then((res) => {
          if (res.message === "success") {
            setMessageBackend("Datei erfolgreich aktualisiert!");
          } else {
            setMessageBackend(res.message);
          }
          setDatabaseUpdated(!databaseUpdated);
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
    setShowUpdateHomeworkModal(false);
    setMessageBackend("");
    setTitle("");
    setSubjectId("");
    setHomeworkUploaded(false);
    setMessageBackendModal("");
  }

  useEffect(() => {
    // console.log("homeworkToUpdate", homeworkToUpdate);
    setMessageBackendModal("");
    setMessageBackend("");
    setHomeworkUploaded(true);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-30  flex justify-center
     items-center "
    >
      <div
        className="flex flex-col p-4 w-1/2 bg-white justify-between items-center
       relative rounded-xl"
      >
        <button
          onClick={() => setShowUpdateHomeworkModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
           hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">Datei aktualisieren</h3>

        <form className="w-full max-w-md mt-8">
          <SelectTeacherUpdate teacherToUpdate={homeworkToUpdate.teacher} />
          <SelectSubjectUpdate subjectToUpdate={homeworkToUpdate.subject} />

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
                defaultValue={homeworkToUpdate.title}
              />
            </div>
          </div>

          <HomeworkDescriptionUpdate
            homeworkDescriptionToUpdate={homeworkToUpdate.description}
          />

          <HomeworkTypeUpdate homeworkTypeToUpdate={homeworkToUpdate.type} />

          <HomeworkDateiUpdate homeworkToUpdate={homeworkToUpdate} />

          <div className="flex justify-end">
            {!homeworkUploaded && (
              <button
                className="flex  px-4 py-2 m-4 rounded-2xl bg-green-200 
           items-center justify-center transition-all text-white"
                disabled
              >
                Datei aktualisieren
              </button>
            )}
            {homeworkUploaded && (
              <button
                onClick={(e) => updateHomework(e)}
                className="flex  px-4 py-2 m-4 rounded-2xl bg-green-200 
           items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
              >
                Datei aktualisieren
              </button>
            )}
          </div>
        </form>

        <p className=" m-4 text-orange-500">{messageBackendModal}</p>
      </div>
    </div>
  );
}

export default HomeworksModalUpdate;
