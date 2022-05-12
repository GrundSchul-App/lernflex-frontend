import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { Document, Page } from "react-pdf";

function SelectInfoData() {
  const { getHomeworksByType, infoDatas, setInfoDatas, setInfoDataId } =
    useContext(Context);

  const [picture, setPicture] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState("");

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onChange = (e) => {
    const value = e.target.value.split(",");
    setInfoDataId(value[0]);
    const dataArr = value[1].split(".");
    const fileExtension = dataArr[dataArr.length - 1];

    if (fileExtension === "pdf") {
      setPicture("");
      setPdfFile(value[1]);
    } else {
      setPdfFile("");
      setPicture(value[1]);
    }
  };

  useEffect(() => {
    getHomeworksByType("info")
      .then((res) => {
        if (res.message === "success") {
          setInfoDatas(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/4">
        <label
          className="block text-gray-500 font-bold md:text-right 
                mb-1 md:mb-0 pr-4"
          htmlFor="inline-name"
        >
          Info Datei
        </label>
      </div>
      <div className="md:w-3/4">
        <select
          className="form-select 
          block
          px-3
          py-1.5
          mr-2
          text-base
          font-normal
          text-gray-700
          bg-gray-200 bg-clip-padding bg-no-repeat
          border-solid border-gray-200 
          rounded
          transition
          ease-in-out
          m-0
          border-2
          focus:text-gray-700 focus:bg-white focus:border-green-500
          focus:outline-none w-full"
          name=""
          id=""
          onChange={(e) => onChange(e)}
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            ...
          </option>

          {infoDatas.map((data, index) => {
            return (
              <option
                className="p-2"
                key={index}
                name="info"
                value={[data._id, data.link]}
              >
                {data.fileName}
              </option>
            );
          })}
        </select>
        <div className="mt-2 flex justify-center">
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
      </div>
    </div>
  );
}

export default SelectInfoData;
