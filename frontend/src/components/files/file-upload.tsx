import { useState } from "react";
import { readCsvOrXlsx, CSV_EXTENSIONS, XLSX_EXTENSIONS, ExpectedSheetsProp } from "./file-processing";

interface FileUploadProp {
    fileName: string;
    setFileName: (value: string) => void;
    expectedSheetsProp: ExpectedSheetsProp;
    errorMessage: string;
    setErrorMessage: (value: string) => void;
}

export default function FileUpload({
    fileName, setFileName,
    expectedSheetsProp, 
    errorMessage, setErrorMessage,
}: FileUploadProp) {
    
    const [isDragging, setIsDragging] = useState(false)
    const fileUploadError = errorMessage !== ""
    
    // Define the event handlers
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };
    
    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
    };
    
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer == undefined) {
            return
        }
        setIsDragging(false);
        
        // Fetch the files
        uploadFile(Array.from(event.dataTransfer.files)[0])
    };

    const handleOnFileUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            uploadFile(event.target.files[0])
        }
        event.target.value = ''
    };

    function uploadFile(file?: File) {
        setFileName("")
        if (file === undefined) {
            return
        }
        var fileExtension = file.name.split('.').pop()
        if (CSV_EXTENSIONS.includes(fileExtension as string) || 
            XLSX_EXTENSIONS.includes(fileExtension as string)) 
        {
            setErrorMessage("")
            processFile(file, fileExtension as string)
        } else {
            setErrorMessage("Unexpected file type selected!")
        }
    }

    function processFile(file: File, fileExtension: string) {
        var fileType: "csv" | "xlsx" = (CSV_EXTENSIONS.includes(fileExtension)) ? "csv" : "xlsx"
        const filereader = new FileReader()
        switch(fileType) {
            case "csv":
                // Read csv as text
                filereader.readAsText(file)
                break
            case "xlsx":
                // Read xlsx as binary string
                filereader.readAsBinaryString(file)
        }
        filereader.onload = function (event) {
            const fileData = event.target?.result;
            Array.from(expectedSheetsProp).forEach(sheet => {
                var maybeHeadersValidation = sheet["headersValidation"]
                var checkFileData = (maybeHeadersValidation) ? {
                    headersValidation: maybeHeadersValidation, setErrorMessage: setErrorMessage}
                    :
                    undefined
                // Process file data
                try {
                    var maybeDataTable = readCsvOrXlsx({
                        fileType: fileType,
                        file: fileData,
                        checkFileData: checkFileData,
                        renameHeaders: sheet['renameHeaders'],
                        paddedCol: sheet['colPadding'],
                        paddedRow: sheet['rowPadding'],
                        sheetName: sheet['sheetName'],
                    })
                    sheet.setFileDataTable(maybeDataTable)
                    setFileName("Uploaded!")
                } catch (error: any) {
                    setErrorMessage((error as Error).message)
                }
            })
        }
    }
    
    // Style colour for responsive UI
    const textColour = isDragging ? "text-gray-100" : (fileUploadError ? "text-red-500 hover:text-red-700" : (fileName == "" ? "text-amber-500 hover:text-gray-100" : "text-green-500 hover:text-green-700"))
    const bgColour = isDragging ? "bg-amber-400" : (fileUploadError ? "bg-red-100 hover:bg-red-200" : (fileName == "" ? "bg-amber-100 hover:bg-amber-400" : "bg-green-100 hover:bg-green-200" ))
    const borderColour = fileUploadError ? "border-red-500" : (fileName == "" ? "border-amber-500" : "border-green-500")
    
    return (
        <div 
            className={`flex items-center justify-center w-full ${textColour}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <label className={`${bgColour} ${borderColour} transition duration-150 ease-in-out flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer`}>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className={`w-8 h-8 mb-4`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className={`mb-2 text-sm`}><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs">CSV or XLSX</p>
                    {fileUploadError && <p className="text-xs py-2">{errorMessage}</p>}
                </div>
                {fileName}
                <input id="dropzone-file" type="file" accept={'.csv, .xlsx, .xls'} className="hidden" onChange={handleOnFileUploadChange} />
            </label>
        </div>
    )
}