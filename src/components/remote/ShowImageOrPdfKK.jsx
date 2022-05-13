import React from "react";
import { Document, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ShowImageOrPdf({ link }) {
  function getPdfOrImg() {
    // console.log("link", link);
    if (link.length !== 0) {
      const dataArr = link.split(".");
      const fileExtension = dataArr[dataArr.length - 1];
      if (fileExtension === "pdf") {
        return <Document className="w-100" file={link}></Document>;
      } else {
        return <img className="w-100" src={link} alt="..." />;
      }
    }
  }

  return <div className="mt-2 flex justify-center">{getPdfOrImg()}</div>;
}

export default ShowImageOrPdf;
