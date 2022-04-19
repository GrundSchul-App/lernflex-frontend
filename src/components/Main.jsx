import React from "react";
import {FcList} from 'react-icons/fc'

function Main(props) {
  return (
    <div>
      <div className="flex  justify-between  rounded-md   ">
        <div >
          <select name="Klassen" className="w-[248px] h-[75px] bg-white rounded-md">
            <option value="1A">1A</option>
            <option value="2B">2B</option>
            <option value="3C">3C</option>
            <option value="4D">4D</option>
          </select>
        </div>
        <div>
          <select name="Fächer" className="w-[248px] h-[75px] bg-white rounded-md">
            <option value="Deutsch">DE</option>
            <option value="Mathe">MA</option>
            <option value="Englisch">EN</option>
            <option value="Sport">SP</option>
          </select>
        </div>
        <button type="button" className="w-[248px] h-[75px] bg-white rounded-md"> AnwisenheitListe  </button>
      </div>
      <div className="bg-white my-3 rounded-md min-h-[700px]">Tabelle</div>
    </div>
  );
}
export default Main;
