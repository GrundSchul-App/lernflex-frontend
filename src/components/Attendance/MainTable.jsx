import React from "react";

const MainTable = ({ classes, subject, dataArray }) => {
  const createAttendanceList = () => {};

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const getAge = (date) => {
    const dateArr = date.split("-");
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

  return (
    <div className="rounded-2xl m-4 p-4 bg-white">
      <p>Klasse {classes}</p>
      <p>Fach {subject}</p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th className="text-left">Alter</th>
                    <th className="text-left">Geschlecht</th>
                    <th className="text-left">Anwesend</th>
                  </tr>
                </thead>
                <tbody>
                  {dataArray.map((data, index) => {
                    return (
                      <tr key={index} className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {data.firstName}&nbsp;{data.lastName}
                        </td>
                        <td className="text-left">{getAge(data.birthDate)}</td>
                        <td className="text-left">{data.gender}</td>
                        <td>
                          <input
                            className="check"
                            type="checkbox"
                            id="myCheck"
                            onClick={handleChange}
                          ></input>
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
      <div className="flex justify-end">
        <button
          className="flex mt-4 py-[25px] px-[45px] rounded-2xl bg-green-200 max-w-[32%] h-[75px] items-center justify-center hover:bg-green-300"
          onClick={createAttendanceList}
        >
          Anwesendheitsliste generieren
        </button>
      </div>
    </div>
  );
};

export default MainTable;
