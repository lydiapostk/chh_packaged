'use client'
import { Tab } from "@headlessui/react";
import { NavigationTab } from "@/components/navigation/nav-tab";
import CardModal from "@/components/modal/card.modal";
import { useEffect, useState } from "react";
import { DataTableType } from "../generate/emplacement-data";
import Table from "@/components/table/table";
import TableHeaderRow from "@/components/table/table-header-row";
import TableHeaderCell from "@/components/table/table-header-cell";
import TableBody from "@/components/table/table-body";
import TableRow from "@/components/table/table-row";
import TableCell from "@/components/table/table-cell";
import { LanguageType, LanguagesColumnNameToKey, LocationType, LocationsColumnNameToKey } from "../settings-data";
import DeleteButton from "@/components/button/delete-button";
import AddButton from "@/components/button/add-button";
import PopUpModal from "@/components/modal/pop-up-modal";
import ActionButton from "@/components/button/action-button";
import FormModal from "@/components/modal/form-modal";
import FormTextInput from "@/components/form/form-text-input";
import FormInputField from "@/components/form/form-input-field";
import { validateAddLanguageFields, validateAddLanguageLanguageField, validateAddLanguageShortFormField } from "./settings-form-fields-validation";

export default function ConfigureSettings() {
    
    const [showSpinner, setShowSpinner] = useState(true)
    const [languages, setLanguages] = useState<DataTableType>([])
    const [locations, setLocations] = useState<string[]>([])
    useEffect(() => {
        // All /database/* requests will be redirected to flask server
        fetch("/database/fetch_languages_and_locations").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setLanguages(data['languages'])
                setLocations(Array.from(data['locations']).map(location => (location as LocationType).location))
                setShowSpinner(false)
            })
        );
    }, []);
    const [isDelModalOpen, setIsDelModalOpen] = useState(false)
    const [languageToDelete, setLanguageToDelete] = useState<LanguageType | undefined>()
    const [isAddLanguageModalOpen, setIsAddLanguageModalOpen] = useState(false)
    const [languageToAdd, setLanguageToAdd] = useState<LanguageType>({language:"", short_form:""})
    function deleteLanguage() {
        setShowSpinner(true)
        fetch('/database/delete_language', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(languageToDelete), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            res.json().then((data) => {
                setLanguages(data)
                closeDelModal()
                setShowSpinner(false)
            })
        })
    }
    function addLanguage() {
        var isFormFieldsValid = validateAddLanguageFields({language: languageToAdd, languages: languages as LanguageType[]})
        if (!isFormFieldsValid) {
            return
        }
        setShowSpinner(true)
        fetch('/database/upsert_language', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(languageToAdd), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            res.json().then((data) => {
                setLanguageToAdd({language:"", short_form:""})
                setLanguages(data)
                setIsAddLanguageModalOpen(false)
                setShowSpinner(false)
            })
        })
    }

    const [tabIndex, setTabIndex] = useState<number>(0)
    function onToggleTab(index: number) {
        setTabIndex(index)
    }

    const [locationToDelete, setLocationToDelete] = useState<string | undefined>()
    const [isAddLocationModalOpen, setIsAddLocationModalOpen] = useState(false)
    const [locationToAdd, setLocationToAdd] = useState<string>("")
    function deleteLocation() {
        setShowSpinner(true)
        fetch('/database/delete_location', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({"location": locationToDelete}), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            res.json().then((data) => {
                setLocations(Array.from(data).map(location => (location as LocationType).location))
                closeDelModal()
                setShowSpinner(false)
            })
        })
    }
    function addLocation() {
        var isFormFieldsValid = locationToAdd !== "" && !locations.includes(locationToAdd)
        if (!isFormFieldsValid) {
            return
        }
        setShowSpinner(true)
        fetch('/database/upsert_location', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({"location": locationToAdd}), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            res.json().then((data) => {
                setLocationToAdd("")
                setLocations(Array.from(data).map(location => (location as LocationType).location))
                setIsAddLocationModalOpen(false)
                setShowSpinner(false)
            })
        })
    }

    function deleteLanguageOrLocation() {
        if (locationToDelete != undefined) {
            deleteLocation()
        } else if (languageToDelete != undefined) {
            deleteLanguage()
        } else {
            closeDelModal()
        }
    }

    function closeDelModal() {
        setLanguageToDelete(undefined)
        setLocationToDelete(undefined)
        setIsDelModalOpen(false)
    }

    return (
        <CardModal title="Adjust meta data" isCardSelected={true} showSpinner={showSpinner}>
            <Tab.Group onChange={onToggleTab} selectedIndex={tabIndex}>
                <NavigationTab tabTitles={["Languages", "Locations"]} />
                <Tab.Panels>
                    <Tab.Panel key="Languages">
                        <div className="flex flex-row justify-center mt-2 mb-4">
                            <AddButton onClick={()=>{setIsAddLanguageModalOpen(true)} } text={"Add language"} colour={"yellow"} />
                        </div>
                        <Table>
                            <TableHeaderRow>
                                {Array.from(LanguagesColumnNameToKey.keys()).map(key => 
                                    <TableHeaderCell content={LanguagesColumnNameToKey.getValue(key) as string} key={key} />
                                    )}
                                <TableHeaderCell content={"Configure"} />
                            </TableHeaderRow>
                            <TableBody>
                                {languages.map(language => 
                                    <TableRow key={language.language}>
                                        {Array.from(LanguagesColumnNameToKey.keys()).map(key => 
                                            <TableCell key={language[key]} content={language[key].toString()} />
                                            )}
                                        <TableCell key={language.language} content={
                                            <DeleteButton onClick={()=>{setLanguageToDelete(language as LanguageType); setIsDelModalOpen(true)} } text={""} colour={"red"}/>} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Tab.Panel>
                    <Tab.Panel key="Locations">
                        <div className="flex flex-row justify-center mt-2 mb-4">
                            <AddButton onClick={()=>{setIsAddLocationModalOpen(true)} } text={"Add location"} colour={"yellow"} />
                        </div>
                        <Table>
                            <TableHeaderRow>
                                <TableHeaderCell content={"Location"} />
                                <TableHeaderCell content={"Configure"} />
                            </TableHeaderRow>
                            <TableBody>
                                {locations.map(location => 
                                    <TableRow key={location}>
                                        <TableCell content={location} />
                                        <TableCell content={
                                            <DeleteButton onClick={()=>{setLocationToDelete(location); setIsDelModalOpen(true)} } text={""} colour={"red"}/>} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            {(languageToDelete || locationToDelete) && <PopUpModal 
                isOpen={isDelModalOpen} 
                closeModal={closeDelModal} 
                title={"Confirm delete"} 
                className="mt-20"
            >

                <div className="flex flex-col">
                    {`Are you sure you want to delete ${locationToDelete ? locationToDelete : languageToDelete?.language}?`}
                    <div className="mt-4 flex flex-row h-full items-center object-center gap-2">
                        <ActionButton onClick={()=>{deleteLanguageOrLocation()}} text='Delete' colour='red' />
                        <ActionButton onClick={closeDelModal} text='Cancel' colour='grey' />
                    </div>
                </div>
            </PopUpModal>}
            <FormModal 
                isOpen={isAddLanguageModalOpen} 
                closeModal={()=>{setIsAddLanguageModalOpen(false)}} 
                title={"Add new language"} 
                className="mt-20" 
            >
                    <div className="flex flex-col">
                        <FormInputField title="Language">
                            <FormTextInput 
                                name={"Language"} 
                                textInput={languageToAdd.language} 
                                setTextInput={(text) => {setLanguageToAdd({ language: text.toUpperCase(), short_form: languageToAdd.short_form})}}
                                inputValidation={{
                                    isValid: validateAddLanguageLanguageField({language: languageToAdd, languages: languages as LanguageType[]}),
                                    errorMessage: "Language already exists or is empty",
                                }}
                                />
                        </FormInputField>
                        <FormInputField title="Short form" description="e.g. 'ENGLISH' is 'EL'">
                            <FormTextInput 
                                name={"short_form"} 
                                textInput={languageToAdd.short_form} 
                                setTextInput={(text) => {setLanguageToAdd({ language: languageToAdd.language, short_form: text.toUpperCase()})}} 
                                inputValidation={{
                                    isValid: validateAddLanguageShortFormField({language: languageToAdd, languages: languages as LanguageType[]}),
                                    errorMessage: "Short form already exists or is empty",
                                }}
                                />
                        </FormInputField>
                        <div className="mt-4 flex flex-row h-full items-center object-center gap-2">
                            <ActionButton onClick={()=>{addLanguage()}} text='Confirm' colour='yellow' />
                            <ActionButton onClick={() => {setIsAddLanguageModalOpen(false)}} text='Cancel' colour='grey' />
                        </div>
                    </div>
            </FormModal>
            <FormModal 
                isOpen={isAddLocationModalOpen} 
                closeModal={()=>{setIsAddLocationModalOpen(false)}} 
                title={"Add new location"} 
                className="mt-20" 
            >
                    <div className="flex flex-col">
                        <FormInputField title="Location">
                            <FormTextInput 
                                name={"location"} 
                                textInput={locationToAdd} 
                                setTextInput={(text) => {setLocationToAdd(text)}}
                                inputValidation={{
                                    isValid: locationToAdd !== "" && !locations.includes(locationToAdd),
                                    errorMessage: "Location already exists or is empty",
                                }}
                                />
                        </FormInputField>
                        <div className="mt-4 flex flex-row h-full items-center object-center gap-2">
                            <ActionButton onClick={addLocation} text='Confirm' colour='yellow' />
                            <ActionButton onClick={() => {setIsAddLocationModalOpen(false)}} text='Cancel' colour='grey' />
                        </div>
                    </div>
            </FormModal>
        </CardModal>
    )
}