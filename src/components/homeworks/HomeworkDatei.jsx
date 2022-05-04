import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/context";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function HomeworkDatei() {
  const {
    urlHomework,
    setUrlHomework,
    setHomeworkUploaded,
    setFileNameHomework,
  } = useContext(Context);

  const [fileHomework, setFileHomework] = useState("");
  const [picture, setPicture] = useState("");
  /*  const [urlHomework, setUrlHomework] = useState("");
  const [fileNameHomework, setFileNameHomework] = useState(""); */

  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState("");

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onChangeFile = (e) => {
    setFileHomework(e.target.files[0]);
    console.log("e.target.files[0]", e.target.files[0]);
    setFileNameHomework(e.target.files[0].name);
    console.log("url", URL.createObjectURL(e.target.files[0]));

    const dataArr = e.target.files[0].name.split(".");
    const fileExtension = dataArr[dataArr.length - 1];

    if (fileExtension === "pdf") {
      setPicture("");
      setPdfFile(URL.createObjectURL(e.target.files[0]));
    } else {
      setPdfFile("");
      setPicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  const uploadFileHomework = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", fileHomework);
    data.append("upload_preset", "lernflex");
    data.append("cloud_name", "cloudyyy");
    fetch("https://api.cloudinary.com/v1_1/cloudyyy/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        let result = data.url.replace("http:", "https:");
        setUrlHomework(result);
        console.log("url", data.url);
        setHomeworkUploaded(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setFileNameHomework("");
    setPicture("");
  }, []);

  return (
    <>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/4">
          <label
            className="block text-gray-500 font-bold md:text-right 
                    mb-1 md:mb-0 pr-4"
            htmlFor="data-upload"
          >
            Datei
          </label>
        </div>
        <div className="md:w-3/4">
          <input
            className="bg-gray-200 appearance-none border-2 
                border-gray-200 rounded w-full py-2 px-4
                 text-gray-700 leading-tight focus:outline-none 
                 focus:bg-white focus:border-green-500"
            /*    "form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" */

            id="data-upload"
            type="file"
            onChange={(e) => onChangeFile(e)}
          />
          <div className="mt-2 flex justify-around">
            {picture && (
              <img className="w-2/3 rounded-2xl" src={picture} alt="..." />
            )}

            {pdfFile && (
              <div  >
                <Document   file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document>
                {/* <p>
                  Page {pageNumber} of {numPages}
                </p> */}
              </div>
            )}

            <div className="">
              <button
                className="flex  px-2 py-2  rounded-2xl bg-green-200 
           items-center justify-center transition-all hover:bg-green-300 hover:shadow-lg"
                onClick={(e) => uploadFileHomework(e)}
              >
                Upload
              </button>
            </div>
          </div>
        </div>

        {/*   {urlHomework.length !== 0 && <img className="w-{200}" src={urlHomework} alt="..." />} */}
      </div>
    </>
  );
}
