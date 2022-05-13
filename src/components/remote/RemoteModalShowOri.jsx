import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { Document, Page } from "react-pdf";

import DayTable from "./DayTable";

function RemoteModalShow({ remoteToShow, setShowRemoteModal }) {
  const { getDatum } = useContext(Context);

  const [picture, setPicture] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState("");

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    console.log("RemoteModalShow");
   
    if (typeof remoteToShow.infoData !== "undefined") {
      console.log("remoteToShow.infoData.link", remoteToShow.infoData.link);
      const dataArr = remoteToShow.infoData.link.split(".");
      const fileExtension = dataArr[dataArr.length - 1];

      if (fileExtension === "pdf") {
        setPicture("");
        setPdfFile(remoteToShow.infoData.link);
      } else {
        setPdfFile("");
        setPicture(remoteToShow.infoData.link);
      }
    }
  }, []);
  

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-10  flex justify-center
   items-center overflow-hidden"
    >
      <div
        className="flex flex-col p-4 w-2/3 bg-white justify-between items-center
     relative rounded-xl overflow-scroll overflow-x-hidden"
      >
        <button
          onClick={() => setShowRemoteModal(false)}
          className="self-end px-2 py-0 bg-gray-200 rounded transition-all
         hover:cursor-pointer hover:bg-green-200 hover:shadow-xl"
        >
          x
        </button>
        <h3 className="font-semibold mt-4">
          Wochenplan Klasse {remoteToShow.classId.className} - Woche{" "}
          {getDatum(remoteToShow.startWeekDate)} 
        </h3>

        {typeof remoteToShow.infoData !== "undefined" && (
            
          <div className="mt-4 flex justify-center">
            {picture.length !== 0 && (
              <img className="w-1/2" src={picture} alt="..." />
            )}

            {pdfFile.length !== 0 && (
           
              <div className="w-1/2">
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
                {/* <p>
                  Page {pageNumber} of {numPages}
                </p> */}
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between w-full gap-2 mt-2">
          <DayTable dayList={remoteToShow.monday} dayDE="Montag" />
          <DayTable dayList={remoteToShow.tuesday} dayDE="Dienstag" />
          <DayTable dayList={remoteToShow.wednesday} dayDE="Mittwoch" />
          <DayTable dayList={remoteToShow.thursday} dayDE="Donnerstag" />
          <DayTable dayList={remoteToShow.friday} dayDE="Freitag" />
        </div>
      </div>
    </div>
  );
}

export default RemoteModalShow;
