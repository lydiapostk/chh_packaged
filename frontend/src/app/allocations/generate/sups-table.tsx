import ToggleButton from "@/components/button/toggle-button";
import Table from "@/components/table/table";
import TableBody from "@/components/table/table-body";
import TableCell from "@/components/table/table-cell";
import TableHeaderCell from "@/components/table/table-header-cell";
import TableHeaderRow from "@/components/table/table-header-row";
import TableRow from "@/components/table/table-row";
import { DataTableType } from "./emplacement-data";
import { BiStringMap } from "@/utils/bistring-map"
import FormDropdownInput from "@/components/form/form-dropdown-input";
import assert from "assert";

export type supsType = "all" | "new" | "leaving" | "penal/black"

interface SupsTableProp {
    superviseesInfo: DataTableType,
    showSupsType: supsType,
    columnNameKeyMap: BiStringMap,
    supEditType: "toggleEmplacement" | "assignCRS"
    setChhSuperviseesInfo: (updatedTable: DataTableType) => void,
    updateSup?: (sup: {[header: string]: string}, oldCrs: string) => void,
    crsNames?: string[]
}

function is_for_emplacement(sup: {[header: string]: string}) {
    return !sup['case_type'].startsWith("No ")
}

export default function SupsTable({superviseesInfo, setChhSuperviseesInfo, showSupsType, columnNameKeyMap, supEditType, crsNames, updateSup}: SupsTableProp) {
    var isToggleEmplacement = supEditType == 'toggleEmplacement'
    var isAssignCrs = supEditType == 'assignCRS'

    assert(!isAssignCrs || crsNames, "Expect CRS names to be passed in as prop if user is expected to be allowed to assign CRS!")
    
    function toggle_is_for_emplacement(sup: {[header: string]: string}) {
        if (isToggleEmplacement) {
            return function (_: boolean) {
                if (sup['case_type'].startsWith("No ")) {
                    var updated_case_type = sup['case_type'].substring(3)
                } else {
                    var updated_case_type = `No ${sup['case_type']}`
                }
                sup['case_type'] = updated_case_type
            
                //Find index of sup    
                var supIndex = superviseesInfo.findIndex((maybeSup => maybeSup.name == sup.name))
                // Create new sup array
                const updatedSups = [
                    // Items before the insertion point:
                    ...superviseesInfo.slice(0, supIndex),
                    // New item:
                    sup,
                    // Items after the insertion point:
                    ...superviseesInfo.slice(supIndex + 1)
                ];
                setChhSuperviseesInfo(updatedSups);
            }
        }
        return function (_: boolean) {}
    }

    function setAssignedCrs(sup: {[header:string]:string}) {
        if (isAssignCrs) {
            assert(updateSup)
            return function (newCrs: string) {
                var oldCrs = sup['crs_name']
                sup['crs_name'] = newCrs
                updateSup(sup, oldCrs);
            }
        }
        return function (_: string) {}
    }

    function chhSuperviseesFilter(sup: {[header:string]:string}) {
        // If there is option to adjust whether supervisee should be emplaced, show all supervisees
            // Otherwise, show only supervisees who are being emplaced and filter out those who are not
        var showNoAssignSup = isToggleEmplacement || !sup['case_type'].includes("No")
        switch (showSupsType) {
            case "all":
                return showNoAssignSup
            case "leaving":
                return sup['case_type'].includes("Leaving") && showNoAssignSup
            case "new":
                return sup['case_type'].includes("New") && showNoAssignSup
            case "penal/black":
                return sup['cat'] != "DRC" || sup['iph_rating'] == "Black"
        }
    }

    var numOfSups = superviseesInfo.filter(sup => {return chhSuperviseesFilter(sup) && is_for_emplacement(sup)}).length
    var numOfSupsMessage = showSupsType == "all" ? "Total number of supervisees" : (showSupsType == "leaving" ? "Number of reassignments" :"Number of new cases")

    function rowColour(sup: {[header:string]:string}) {
        return sup['crs_name'] || !isAssignCrs ?  "hover:bg-gray-50" : "bg-red-200 text-red-700 hover:bg-red-100"
    }
    return (
        <>
            <div className="text-center py-4 bg-yellow-400 font-semibold text-base">
                {`${numOfSupsMessage} for emplacement: ${numOfSups}`}
            </div>
            <Table>
                <TableHeaderRow>
                    {isToggleEmplacement ? <TableHeaderCell content='To Emplace?' key='to_emplace' /> : <></>}
                    {Array.from(columnNameKeyMap.keys()).map(key => 
                        <TableHeaderCell content={columnNameKeyMap.getValue(key) as string} key={key} />
                    )}
                    {isAssignCrs ? <TableHeaderCell content='CRS Name' key='crs_name' /> : <></>}
                </TableHeaderRow>
                <TableBody>
                    {superviseesInfo.filter(sup => {return chhSuperviseesFilter(sup)}).map(sup => 
                        <TableRow key={sup.name} className={rowColour(sup)}>
                            {isToggleEmplacement
                                ? 
                                    <TableCell 
                                        key={'to_emplace' + sup.name} 
                                        content={<ToggleButton 
                                            key={'to_emplace_toggle' + sup.name} 
                                            enabled={is_for_emplacement(sup)} 
                                            setEnabled={toggle_is_for_emplacement(sup)} />}
                                    /> 
                                : 
                                <></>
                            }
                            {Array.from(columnNameKeyMap.keys()).map(key => 
                                <TableCell key={key + sup.name} content={String(sup[key])} />
                            )}
                            {isAssignCrs
                                ? 
                                    <TableCell 
                                        key={'crs_name' + sup.name} 
                                        content={
                                            <div className="flex flex-col flex-nowrap relative w-auto gap-1 h-full">
                                                <FormDropdownInput 
                                                    options={crsNames as string[]} 
                                                    selectedOption={sup.crs_name} 
                                                    setSelectedOption={setAssignedCrs(sup)} 
                                                />
                                            </div>}
                                    /> 
                                : 
                                <></>
                            }
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}