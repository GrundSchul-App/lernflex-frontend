import React from "react";
import MainTab from "./MainTab";
import MainTable from "./MainTable";

const Main = () => {
  const dataArray = [
    {firstName: "pepe", lastName: "perez", birthDate: "2012-04-03", gender:"M"},
    {firstName: "Rosa", lastName: "Lu", birthDate: "2012-05-03", gender:"F"}
  ]
  return (
    <div className="flex-col ">
      <div className="flex justify-evenly ">
        <MainTab classes="Klassen" />
        <MainTab classes="Klassen" />
        <button className="flex mt-4 py-[25px] px-[45px] rounded-2xl bg-white max-w-[32%] h-[75px] items-center justify-center">
          Anwesendheitsliste
        </button>
      </div>
      <MainTable dataArray={dataArray}/>
    </div>
  );
};

export default Main;
