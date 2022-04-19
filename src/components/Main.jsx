import React from 'react'
import MainTab from './MainTab'
const Main = () => {
  return (
    <div className="flex justify-evenly ">
      <MainTab classes="Klassen" />
      <MainTab classes="Klassen" />
      <button className="flex mt-4 py-[25px] px-[45px] rounded-2xl bg-white max-w-[32%] h-[75px] items-center justify-center" >Anwesendheitsliste</button>
    </div>
  );
}

export default Main
