import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExportExcel = ({ excelData, fileName }) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreedsheetml.sheet;charset-UTF-8";
    const fileExtension = ".xlsx";

    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <button
            variant="contained"
            onClick={(e) => exportToExcel(fileName)}
            color="primary"
            className="px-3 pl-4 py-1 bg bg-1 h-6 ml-4 btn1"
        >
            Generate Sales Report
        </button>
    );
};

export default ExportExcel;
