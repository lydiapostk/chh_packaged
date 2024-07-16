import Table from "@/components/table/table";
import TableBody from "@/components/table/table-body";
import TableCell from "@/components/table/table-cell";
import TableHeaderCell from "@/components/table/table-header-cell";
import TableHeaderRow from "@/components/table/table-header-row";
import TableRow from "@/components/table/table-row";
import { DataTableType } from "./emplacement-data";
import { BiStringMap } from "@/utils/bistring-map"

export type crsType = "all" | "leaving" | "on hiatus" | "taking new cases"

interface CrsTableProp {
    crsInfo: DataTableType,
    showCrsType: crsType,
    columnNameKeyMap: BiStringMap,
}

export function crsFilter(crs: {[header:string]:string}, showCrsType: 'all' | 'leaving' | 'on hiatus' | 'taking new cases') {
    switch (showCrsType) {
        case "all":
            return true
        case "leaving":
            return crs['is_leaving']
        case "on hiatus":
            return crs['no_new_cases']
        case "taking new cases":
            return !crs['no_new_cases'] && !crs['is_leaving']
    }
}

export default function CrsTable({crsInfo, showCrsType, columnNameKeyMap}: CrsTableProp) {

    function getNumOfCrsMessage() {
        switch (showCrsType) {
            case "all":
                return "All"
            case "leaving":
                return "Leaving"
            case "on hiatus":
                return "Not taking new cases this month"
        }
    }
                
    var totalNumOfCrs = crsInfo.filter(crs => {return !crs['is_leaving'] && !crs['no_new_cases']}).length
    var numOfCrs = crsInfo.filter(crs => {return crsFilter(crs, showCrsType)}).length

    return (
        <>
            <div className="text-center py-4 bg-yellow-400 font-semibold text-base">
                <p>{`Total number of caseworkers taking new cases this month: ${totalNumOfCrs}\n`}</p>
                {showCrsType != "taking new cases" && <p className="font-normal">{`${getNumOfCrsMessage()}: ${numOfCrs}`}</p>}
                {showCrsType != "taking new cases" && <p className="font-normal italic px-4">To add or remove caseworkers, or change leaving / hiatus status, please restart.</p>}
            </div>
            <Table>
                <TableHeaderRow>
                    {Array.from(columnNameKeyMap.keys()).map(key => 
                        <TableHeaderCell content={columnNameKeyMap.getValue(key) as string} key={key} />
                    )}
                </TableHeaderRow>
                <TableBody>
                    {crsInfo.filter(crs => {return crsFilter(crs, showCrsType)}).map(crs =>
                        <TableRow key={crs.crs_name}>
                            {Array.from(columnNameKeyMap.keys()).map(key => 
                                <TableCell key={key + crs.crs_name} content={crs[key].toString()} />
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}