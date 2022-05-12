import React, { useEffect } from "react";
import ShowImageOrPdf from "./ShowImageOrPdf";

function DayTable({ dayList, dayDE }) {
  useEffect(() => {
  console.log("dayList", dayList);
  }, []);

  return (
    <div className="flex flex-col w-1/5 mt-2  text-sm justify-start items-center">
      <p className="bg-green-300 min-w-full text-center p-2 text-base font-bold rounded-xl">
        {dayDE}
      </p>
  
      {dayList.length !== 0 &&
        dayList.map((item, index) => (
          <div
            key={item._id}
            className="flex justify-between bg-green-200 
            min-w-full p-2 text-sm rounded-xl mt-2"
          >
            <div className="flex flex-col">
              {typeof item.subject !== "undefined" && (
                <p className="text-left font-semibold">
                  {item.subject.subject_title}
                </p>
              )}

              {typeof item.homeworkText !== "undefined" && (
                <p className="text-left">{item.homeworkText}</p>
              )}

              {typeof item.homeworkData !== "undefined"  && (               
                <ShowImageOrPdf link={item.homeworkData.link} />           
                              
              )}
            </div>
          </div>
        ))}
    
    </div>
  );
}

export default DayTable;
