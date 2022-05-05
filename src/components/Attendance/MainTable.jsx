import { useEffect } from "react";
import React, { useContext, useState } from "react";
import { Context } from "../../context/context";

const MainTable = ({ classAndSubjectName }) => {
  const {
    studentsList,
    classId,
    subjectId,
    addAttendanceList,
    getTeacherByClassIdAndSubjectId,
    messageBackend,
    setMessageBackend,
  } = useContext(Context);

  //const [checked, setChecked] = useState(false);
  const [absentStudentsIdList, setAbsentStudentsIdList] = useState([]);
  const [data, setData] = useState([]);

  // console.log("**", studentsList);

  

  const handleChange = (e) => {
    //e.preventDefault();
    console.log(e.target.value);
    //setChecked(!checked);

    const isChecked = e.target.checked;
    console.log("isChecked", isChecked);
    if (isChecked) {
      setAbsentStudentsIdList([...absentStudentsIdList, e.target.value]);
    } else {
      setAbsentStudentsIdList(
        absentStudentsIdList.filter((id) => id !== e.target.value)
      );
    }
  };

  const getAge = (date) => {
    const dateOnly = date.split("T")[0];
    const dateArr = dateOnly.split("-");
    const dateString = dateArr.join();
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const createAttendanceList = () => {
    console.log("absentStudentsIdList", absentStudentsIdList);

    getTeacherByClassIdAndSubjectId(classId, subjectId)
      .then((res) => {
        if (res.message === "success") {
          console.log("res.data", res.data);
        }
        setData({
          classId: classId,
          subject: subjectId,
          teacher: res.data._id,
          absent: absentStudentsIdList,
        });       
      }).catch((err) => {
        console.log("err", err);
      } );      
  };

  useEffect(() => {
    if (data.length !== 0) {
    addAttendanceList(data).then((res) => {
      setMessageBackend(res.message);
    });}
  }, [data]);

  return (
    <div className="rounded-2xl m-4 p-4 bg-white w-full mr-4">
      <p className="font-semibold">{classAndSubjectName}</p>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th className="text-center">Alter</th>
                    <th className="text-center">Geschlecht</th>
                    <th className="text-center">Abwesend</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsList.map((data, index) => {
                    return (
                      <tr
                        key={index}
                        className={
                          (index + 1) % 2 === 0
                            ? "border-b"
                            : "bg-gray-100 border-b"
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-gray-900  px-6 py-4 whitespace-nowrap">
                          {data.firstName}&nbsp;{data.lastName}
                        </td>
                        <td className="text-center">
                          {getAge(data.birthDate)}
                        </td>
                        <td className="text-center">{data.gender}</td>
                        <td className="text-center">
                          <div className="form-check">
                            <input
                              className="form-check-input
                             h-4 w-4 border border-gray-300 rounded-sm
                              bg-white checked:bg-orange-500 checked:border-orange-500
                               focus:outline-none transition duration-200 mt-1 align-top 
                               bg-no-repeat bg-center bg-contain  mr-2 cursor-pointer"
                              type="checkbox"
                              onChange={handleChange}
                              value={data._id}
                            ></input>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className=" m-4 text-orange-500">{messageBackend}</p>
        <button
          className="flex mt-4 p-4 rounded-2xl bg-green-200 max-w-[32%]
           h-[75px] items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
          onClick={createAttendanceList}
        >
          Abwesendheitsliste speichern
        </button>
      </div>
    </div>
  );
};

export default MainTable;
