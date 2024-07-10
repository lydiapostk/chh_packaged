'use client'
import { useState, useEffect, useCallback, KeyboardEvent } from "react";
import { CrsType, CrsColumnNameToKey } from "./crs-data";
import AddButton from "@/components/button/add-button";
import CrsDelForm from "./crs-del-form";
import DeleteButton from "@/components/button/delete-button";
import EditButton from "@/components/button/edit-button";
import Spinner from "@/components/status/spinner";
import ToggleButton from "@/components/button/toggle-button";
import TableHeaderRow from "@/components/table/table-header-row";
import TableHeaderCell from "@/components/table/table-header-cell";
import TableBody from "@/components/table/table-body";
import TableCell from "@/components/table/table-cell";
import TableRow from "@/components/table/table-row";
import CrsForm from "./crs-form";
import { GenderType } from "@/data/personal-info";
import { LanguageType, LocationType } from "../settings-data";

export default function ViewAllCrs() {

    // Variables and functions for CRS table
    const [crsList, setCrsList] = useState<CrsType[]>([])
    const [languagesList, setLanguagesList] = useState<string[]>([])
    const [locationsList, setLocationsList] = useState<string[]>([])
    const [showSpinner, setShowSpinner] = useState(true)
    // Using useEffect for single rendering to populate CRS table
    useEffect(() => {
        // All /database/* requests will be redirected to flask server
        fetch("/database/get_all_crs_ros_details").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setCrsList(data)
                setShowActiveCrsOnly(true)
                fetch("/database/fetch_languages_and_locations").then((res) =>
                    res.json().then((data) => {
                        // Setting a data from api
                        setLanguagesList(Array.from(data['languages']).map(language => (language as LanguageType).language))
                        setLocationsList(Array.from(data['locations']).map(location => (location as LocationType).location))
                        setShowSpinner(false)
                    })
                );
            })
        );
    }, []);
    
    // Variables and functions for create form modal
    const [isCreateFormOpen, setIsCreateFormOpen] = useState(false)
    function closeCreateModal() {
        setIsCreateFormOpen(false)
    }
    // Variables and functions for edit form modal
    const [crsToEdit, setCrsToEdit] = useState<CrsType>()
    const [isEditFormOpen, setIsEditFormOpen] = useState(false)
    function editCrs(name: string) {
        setCrsToEdit(crsList.find(crs => crs.crs_name === name))
        setIsEditFormOpen(true)
    }
    function closeEditModal() {
        setCrsToEdit(undefined)
        setIsEditFormOpen(false)
    }
    // Variables and functions for delete modal
    const [crsToDel, setCrsToDel] = useState<CrsType>()
    const [isDelModalOpen, setIsDelModalOpen] = useState(false)
    function deleteCrs(name: string) {
        setCrsToDel(crsList.find(crs => crs.crs_name === name))
        setIsDelModalOpen(true)
    }
    function closeDelModal() {
        setCrsToDel(undefined)
        setIsDelModalOpen(false)
    }

    // Controls for filtering active CRS
    const [showActiveCrsOnly, setShowActiveCrsOnly] = useState(false)
    const [inactiveCrsList, setInactiveCrsList] = useState<CrsType[]>([])
    function handleShowActiveCrsOnly(value: boolean) {
        setShowActiveCrsOnly(value)
        if (value) {
            setInactiveCrsList(crsList.filter(crs => !crs.is_active))
            setCrsList(crsList.filter(crs => crs.is_active))
        } else {
            setCrsList(crsList.concat(inactiveCrsList).sort((a, b) => a.crs_name.localeCompare(b.crs_name)))
            setInactiveCrsList([])
        }
    }

    // Controls for edit/delete mode
    const [inEditMode, setInEditMode] = useState(false)
    const [inDelMode, setInDelMode] = useState(false)
    function handleClickRow(name: string) {
        if (inEditMode) {
            editCrs(name)
        } else if (inDelMode) {
            deleteCrs(name)
        }
    }
    const allowEditDelMode = !inEditMode && !inDelMode
    var rowColour = inEditMode ? "hover:bg-green-200 hover:text-green-700" : 
                    (inDelMode ? "hover:bg-red-200 hover:text-red-700" : 
                    "hover:bg-gray-50")
    const escEditDelMode = useCallback((event: any) => {
        if ((event as KeyboardEvent).key === "Escape" && !isEditFormOpen && !isDelModalOpen) {
            setInEditMode(false)
            setInDelMode(false)
        }
      }, [isEditFormOpen, isDelModalOpen]);

    useEffect(() => {
        document.addEventListener('keydown', escEditDelMode, false)
    
        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', escEditDelMode, false)
        }
    }, [escEditDelMode]);


    if (showSpinner) {
        return (
            <div className="container transition-all ease-in-out duration-100 w-screen flex justify-center p-12">
                <Spinner width="w-12" height="h-12" />
            </div>
        )
    } else {
        return (
            <div className="flex flex-col justify-stretch">
                {allowEditDelMode && <div className="flex flex-row grow justify-between items-center sticky p-4 font-semibold text-yellow-700">
                    <ToggleButton 
                    enabled={showActiveCrsOnly} 
                    setEnabled={handleShowActiveCrsOnly}
                    enabledText="Only show CRS still in service"
                    disabledText=""
                    />
                    <div className="flex flex-row w-fit gap-2">
                        <AddButton onClick={() => {setIsCreateFormOpen(true)}} text="Create New CRS" colour="yellow" isActive={allowEditDelMode} />
                        <EditButton onClick={() => {setInEditMode(true)}} text="Edit CRS Details" colour="green" isActive={allowEditDelMode} />
                        <DeleteButton onClick={() => {setInDelMode(true)}} text="Delete CRS" colour="red" isActive={allowEditDelMode} />
                    </div>
                </div>}
                {inEditMode && <div className="block min-w-full flex items-center justify-center pointer-events-none font-bold">
                    <div>
                        Click on row to edit. Press <p className="inline-flex font-mono bg-gray-100 p-2">{"<esc>"}</p> to exit <p className="inline-flex overline text-green-700 p-2">edit mode</p>.
                    </div>
                </div>}
                {inDelMode && <div className="block min-w-full flex items-center justify-center pointer-events-none font-bold">
                    <div>
                        Click on row to delete. Press <p className="inline-flex font-mono bg-gray-100 p-2">{"<esc>"}</p> to exit <p className="inline-flex overline text-red-700 p-2">delete mode</p>.
                    </div>
                </div>}
                <div className="overflow-x-auto h-screen max-w-fit flex flex-col justify-items-center">
                    <div className="table bg-white">
                        <TableHeaderRow>
                            {Array.from(CrsColumnNameToKey.keys()).map(key => 
                                <TableHeaderCell key={key} content={CrsColumnNameToKey.getValue(key) as string} />
                            )}
                        </TableHeaderRow>
                        <TableBody>
                            {crsList.map(crs => 
                                <TableRow key={crs.crs_name} className={rowColour} onClick={() => handleClickRow(crs.crs_name)}>
                                    {Array.from(CrsColumnNameToKey.keys()).map(key => 
                                        <TableCell key={key + crs.crs_name} content={String(crs[key as keyof CrsType])} />
                                    )}
                                </TableRow>
                            )}
                        </TableBody>
                    </div>
                </div>
                
                {isCreateFormOpen && 
                    <CrsForm 
                        isOpen={isCreateFormOpen} 
                        closeModal={closeCreateModal}
                        setCrsList={setCrsList}
                        languagesList={languagesList}
                        locationsList={locationsList}
                        crs={{
                            crs_name: "",
                            gender: "" as GenderType,
                            able_to_take_penal: false,
                            able_to_take_non_penal: false,
                            max_iph_status: "Green",
                            hwh_locations: "",
                            spoken_languages: "ENGLISH",
                            max_overall_caseload: 0,
                            max_new_caseload: 0,
                            is_ground_crs: false,
                            is_lcm: false,
                            is_active: true,
                        }}
                        crsNames={crsList.flatMap(crs => crs.crs_name)}
                        formSubmitAddress={'/database/create_crs_detail'}
                        enableNameField={true}
                    />
                }
                {crsToEdit && 
                    <CrsForm 
                        isOpen={isEditFormOpen} 
                        closeModal={closeEditModal} 
                        crs={crsToEdit} 
                        setCrsList={setCrsList}
                        languagesList={languagesList}
                        locationsList={locationsList}
                        formSubmitAddress={'/database/edit_crs_detail'}
                    />
                }
                {crsToDel &&
                    <CrsDelForm 
                        isOpen={true}
                        closeModal={closeDelModal} 
                        crsName={crsToDel.crs_name} 
                        setCrsList={setCrsList}                    />
                }
            </div>
        )
    }
}