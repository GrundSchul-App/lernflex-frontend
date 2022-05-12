import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function ShowImageOrPdf({ link }) {
  const [picture, setPicture] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState(""); 
  
  

  const onDocumentLoadSuccess = ({ numPages }) => {
   // setNumPages(numPages);
  };

  useEffect(() => {  
    console.log("link", link);
   if (link.length !== 0) {

    const dataArr = link.split(".");
    const fileExtension = dataArr[dataArr.length - 1];

    if (fileExtension === "pdf") {
      setPicture("");
      setPdfFile(link);
    } else {
      setPdfFile("");
      setPicture(link);
    }  
  }
  
  }, []);

  return (
    <div className="mt-2 flex justify-center">
      {picture.length !== 0 && (
        <img className="w-100" src={picture} alt="..." />
      )}

      {pdfFile.length !== 0 && (
        <div className="w-100">
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      )}
    </div>
  );
}

export default ShowImageOrPdf;
