import { useEffect, useState } from "react";
import { readCsvOrXlsx, CSV_EXTENSIONS, XLSX_EXTENSIONS, ExpectedFilesProp } from "./file-processing";
import JSZip from "jszip";

interface ZipFolderUploadProp {
    folderName: string;
    setFolderName: (value: string) => void;
    expectedFilesProps: ExpectedFilesProp;
    errorMessage: string;
    setErrorMessage: (value: string) => void;
}

export default function ZipFolderUpload({
    folderName, setFolderName,
    expectedFilesProps,
    errorMessage, setErrorMessage,
}: ZipFolderUploadProp) {
    
    const [fileUploadError, setFileUploadError] = useState<boolean>(errorMessage !== "")
    useEffect(() => {
        setFileUploadError(errorMessage !== "")
    }, [errorMessage])
    const [isDragging, setIsDragging] = useState(false)
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
        uploadFolder(Array.from(event.dataTransfer.files)[0])
    };
    const handleOnFolderUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            uploadFolder(event.target.files[0])
        }
        event.target.value = ''
    };
    function uploadFolder(folder?: File) {
        if (folder === undefined) {
            return
        }
        setErrorMessage("")
        JSZip.loadAsync(folder).then(unzippedFolder => {
            if (Object.keys(expectedFilesProps).every(targetFile => {
                // Check that all expected files are included in folder
                return Object.keys(unzippedFolder.files).some(filename => filename.includes(targetFile))  
            })) {
                Object.keys(unzippedFolder.files).forEach((filename) =>{
                    var fileExtension = filename.split('.').pop()
                    var fileKey = Object.keys(expectedFilesProps).find(targetFile => filename.includes(targetFile))
                    if (fileExtension && fileKey && (CSV_EXTENSIONS.includes(fileExtension as string) || XLSX_EXTENSIONS.includes(fileExtension as string))) {
                        var fileType: "csv" | "xlsx" = (CSV_EXTENSIONS.includes(fileExtension)) ? "csv" : "xlsx"
                        switch (fileType) {
                            case "csv":
                                unzippedFolder.files[filename].async('text').then((fileData): any => {
                                    _processFile(fileType, fileData, fileKey as string)
                                })
                                break
                            case "xlsx":
                                unzippedFolder.files[filename].async('arraybuffer').then((fileData): any => {
                                    _processFile(fileType, fileData, fileKey as string)
                                })
                                break
                        }
                    }
                })
            } else {
                setErrorMessage("Missing movement files!")
            }
        }).then(() => {
            if (!fileUploadError) {setFolderName("Uploaded!")}
        })
    }

    function _processFile(fileType: "csv" | "xlsx", fileData: string | ArrayBuffer, targetFile: string) {
        var expectedSheetsProps = expectedFilesProps[targetFile]
        Array.from(expectedSheetsProps).forEach(sheet => {
            var maybeHeadersValidation = sheet["headersValidation"]
            var checkFileData = (maybeHeadersValidation) ? {
                headersValidation: maybeHeadersValidation, setErrorMessage: setErrorMessage}
                :
                undefined
            var maybeDataTable = readCsvOrXlsx({
                fileType: fileType,
                file: fileData,
                checkFileData: checkFileData,
                renameHeaders: sheet['renameHeaders'],
                paddedCol: sheet['colPadding'],
                paddedRow: sheet['rowPadding'],
                sheetName: sheet['sheetName'],
            })
            if (maybeDataTable == undefined) {
                setErrorMessage(`File format of ${targetFile} is unexpected! Expected sheet: ${sheet['sheetName']}; `)
                return
            }
            sheet.setFileDataTable(maybeDataTable)
        })
    }
    
    // Style colour for responsive UI
    const textColour = isDragging ? "text-gray-100" : (fileUploadError ? "text-red-500 hover:text-red-700" : (folderName == "" ? "text-amber-500 hover:text-gray-100" : "text-green-500 hover:text-green-700"))
    const bgColour = isDragging ? "bg-amber-400" : (fileUploadError ? "bg-red-100 hover:bg-red-200" : (folderName == "" ? "bg-amber-100 hover:bg-amber-400" : "bg-green-100 hover:bg-green-200" ))
    const borderColour = fileUploadError ? "border-red-500" : (folderName == "" ? "border-amber-500" : "border-green-500")
    
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
                    <p className="text-xs">.zip</p>
                    {fileUploadError && <p className="text-xs py-2">{errorMessage}</p>}
                </div>
                {!fileUploadError && <p className="text-xs py-2">{folderName}</p>}
                <input id="dropzone-zip" type="file" accept={'.zip'} className="hidden" onChange={handleOnFolderUploadChange} value=""/>
            </label>
        </div>
    )
}