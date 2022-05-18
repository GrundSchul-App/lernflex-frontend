import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function InfosOnlineCurse(props) {
  const [picture, setPicture] = useState("");
  const [pageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState("");

  const { getHomeworksByType, onlineHomework, setOnlineHomework, setOption } =
    useContext(Context);

  useEffect(() => {
    const type = "online";
    getHomeworksByType(type)
      .then((res) => {
        if (res.message === "success") {
          setOnlineHomework(res.data);
          console.log("data allHomeworks modale studenthomework ", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setOption("");
  }, []);

  useEffect(() => {
    onlineHomework.map((homework) => {
      console.log("link", homework.link);
      if (homework.link.length !== 0) {
        const dataArr = homework.link.split(".");
        const fileExtension = dataArr[dataArr.length - 1];

        if (fileExtension === "pdf") {
          setPicture("");
          setPdfFile(homework.link);
        } else {
          setPdfFile("");
          setPicture(homework.link);
        }
      }
    });
  }, []);

  useEffect(() => {
    const type = "info";
    getHomeworksByType(type)
      .then((res) => {
        if (res.message === "success") {
          setOnlineHomework(res.data);
          console.log("data allHomeworks modale studenthomework ", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setOption("");
  }, []);

  return (
    <div className="bg-white mt-4 rounded-xl max-h-[500px] w-full p-[25px] overflow-y-scroll scrollbar-hide mb-4">
      <h2 className="bold text-slate-500">Alles über unsere Onlinekurse </h2>

      {onlineHomework.length !== 0 &&
        onlineHomework.map((homework, index) => {
          return (
            <div key={index} className="w-18rem border p-5 mt-3 max-w-sm ">
              {picture.length !== 0 && (
                <img className="w-100" src={picture} alt="..." />
              )}
              {pdfFile.length !== 0 && (
                <div className="w-100">
                  <Document file={pdfFile}>
                    <Page pageNumber={pageNumber} />
                  </Document>
                </div>
              )}

              <div className="card-body">
                <h6 className="p-2 text-center text-gray-800">
                  {homework.fileName}
                </h6>
                <p className="text-left inline text-sm text-gray-700">
                  {homework.description}
                </p>
                <button className="bg-blue-300 rounded-md p-1 m-3 bold text-white hover:text-red-600 hover:bg-blue-800">
                  Sehe mehr Infos
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default InfosOnlineCurse;
