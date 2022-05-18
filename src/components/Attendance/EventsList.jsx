import React, { useContext } from "react";
import { Context } from "../../context/context";

const EventsList = () => {
  const { selectDate,  eventList } =
    useContext(Context);

  const date = selectDate ? new Date(selectDate).toLocaleDateString() : "";

  const dateSuche = date.split("/").reverse().join("-");
  console.log(dateSuche);

  

  return (
    <div className="bg-white mt-4 rounded-xl h-[480px] w-full p-[25px] font-medium  text-gray-600 mb-4">
      <form>
        <fieldset className="border border-black-500   rounded-md w-[10%]  ">
          <legend className="font-semibold text-[#52b69e]">Events Info</legend>
          <div className=" w-[250px]  mt-8 border-b-4 border-gray-300  ">
                  <p className="m-1 font-bold">
                   Eventsdatum {" "}
                   <span className="w-fit bg-slate-200 text-red-700 bold ">{date}</span>
                 </p>
                    
                  </div>
          {eventList.length !== 0 &&
            eventList.map((event, index) => {
              return (
                <div key={index}>


                  
                  <div className=" w-[250px]  mt-5">
                  <p className="m-1">
                   Titel {" "}
                   <span className="w-fit bg-slate-200 text-red-700 bold ">{event.title}</span>
                 </p>
                    
                  </div>

                  <div className=" w-[250px]  mt-5 border-b-2">
                  <p className="m-1">
                   Beschreibung {" "}
                   <span className="w-fit bg-slate-200 text-red-700 bold ">{event.description}</span>
                 </p>
                    
                  </div>
                  
                  
                </div>
              );
            })}
        </fieldset>
      </form>
    </div>
  );
};

export default EventsList;
