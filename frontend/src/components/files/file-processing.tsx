import { DataTableType } from '@/utils/common-types';
import * as XLSX from 'xlsx';

export const XLSX_EXTENSIONS = ['XLS', 'xls', 'XLSX', 'xlsx', 'xlsm', 'xlsb']
export const CSV_EXTENSIONS = ['CSV', 'csv']
export type ExpectedFilesProp = {[fileName: string]: ExpectedSheetsProp}
export type ExpectedSheetsProp = {
    "sheetName"?: string | number,
    "rowPadding"?: number, 
    "colPadding"?: number,
    "setFileDataTable": (value: DataTableType) => void;
    "headersValidation"?: (headers: string[]) => boolean;
    "renameHeaders"?: (header:string) => string | undefined;
}[]

interface readCsvOrXlsxProp {
    fileType: "csv" | "xlsx",
    file?: string | null | ArrayBuffer | undefined, 
    checkFileData?: {
        headersValidation: (headers: string[]) => boolean,
        setErrorMessage: (value: string) => void,
    },
    renameHeaders?: (header:string) => string | undefined,
    paddedCol?: number,
    paddedRow?: number,
    sheetName?: string | number,
}

export function readCsvOrXlsx({
    fileType,
    file, 
    checkFileData,
    renameHeaders,
    paddedCol,
    paddedRow,
    sheetName,
}: readCsvOrXlsxProp) {
    if (file === undefined || file === null) {
        throw Error("Undefined file")
    }

    var headers: string[];
    var data: Array<string[]> = [];
    
    switch(fileType) {
        case "csv":
            // Convert to string, trim, and split by line break
            const input_array = file.toString().trim().split("\n");
            
            // Split rows by comma and push to data matrix
            for (var r of input_array){
                let row = r.toString().split(",");
                data.push(row);
            }
            // Get header row
            headers = data[0];
            
        case "xlsx":
            var workbook = XLSX.read(file, { type: "binary" });
            sheetName = 
                typeof sheetName === 'number' ? workbook.SheetNames[sheetName] 
                    : 
                (!sheetName || sheetName == "" ? workbook.SheetNames[0] // Assume take first sheet if undefined
                    : 
                sheetName);
            var worksheet = workbook.Sheets[sheetName];
            var processedArray = XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false });
            
            // Get header row
            headers = processedArray.shift() as Array<string>;
            if (paddedRow) {
                for (var i = 0; i < paddedRow; i++) {
                    headers = processedArray.shift() as Array<string>;
                }
            }
            // Return if there is no valid sheet
            if (!headers) {
                throw Error("Headers cannot be found! Did you leave empty rows at the top?")
            }
            // Remove trailing whitespaces
            headers = headers.map(header => header.trim())
            data = processedArray as Array<Array<string>>;
    }

    checkFileData?.headersValidation(headers)

    // Iterate over data rows
    var indexed_output: DataTableType = [];
    var startCol = paddedCol ? paddedCol : 0
    for(var i = 0; i < data.length; i++){
        var indexedRow: {[header: string]: string} = {};
        var rawRow = data[i];
        // Remove duplicated header rows
        if (rawRow.every(entry => headers.some(header => entry.includes(header)))) {
            continue
        }
        // Iterate over headers as keys and assign to object
        for (var j = startCol; j < headers.length; j++){
            var header = headers[j]
            if (renameHeaders !== undefined) {
                var maybeHeader = renameHeaders(header)
                header = maybeHeader ? maybeHeader : header
            }
            indexedRow[header] = rawRow[j] ? rawRow[j].trim() : rawRow[j];
        }
        indexed_output.push(indexedRow);
    }
    return indexed_output
  };