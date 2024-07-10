'use client'
import { useState } from 'react'
import { CrsDataStringArrayParse, CrsType, IphStatuses, IphStatusType, CrsDataArrayStringify, } from './crs-data'
import { CrsFormFieldValidation } from './crs-form-validation'

import ActionButton from '@/components/button/action-button'
import FormDropdownInput from '@/components/form/form-dropdown-input'
import FormInputField from '@/components/form/form-input-field'
import FormMultiSelectDropdownInput from '@/components/form/form-multiselect-dropdown-input'
import FormTextInput from '@/components/form/form-text-input'
import FormToggleInput from '@/components/form/form-toggle-input'
import FormNumberInput from '@/components/form/form-number-input'
import FormModal from '@/components/modal/form-modal'
import StatusModal from '@/components/status/status-modal'
import { GenderType, Genders } from '@/data/personal-info'

interface CrsFormProp {
    isOpen: boolean;
    closeModal: () => void;
    crs: CrsType;
    crsNames?: string[];
    languagesList: string[];
    locationsList: string[];
    setCrsList: (values: CrsType[]) => void;
    formSubmitAddress: string;
    enableNameField?: boolean;
}

export default function CrsForm({
    isOpen, closeModal, 
    crs, crsNames, setCrsList, 
    languagesList, locationsList,
    formSubmitAddress, enableNameField,
}: CrsFormProp) {
    const [name, setName] = useState(crs.crs_name)
    const [gender, setGender] = useState(crs.gender)
    const [canTakePenal, setCanTakePenal] = useState<boolean>(crs.able_to_take_penal)
    const [canTakeNonPenal, setCanTakeNonPenal] = useState<boolean>(crs.able_to_take_non_penal)
    const [iph, setIph] = useState<IphStatusType>(crs.max_iph_status)
    const [maxOverallCaseload, setMaxOverallCaseload] = useState(crs.max_overall_caseload)
    const [maxNewCaseload, setMaxNewCaseload] = useState(crs.max_new_caseload)
    const [hwhLocations, setHwhLocations] = useState<string[]>(CrsDataStringArrayParse(crs.hwh_locations))
    const [languages, setLanguages] = useState(CrsDataStringArrayParse(crs.spoken_languages))
    const [isGroundCrs, setIsGroundCrs] = useState(crs.is_ground_crs)
    const [isLcm, setIsLcm] = useState(crs.is_lcm)
    const [isActive, setIsActive] = useState(crs.is_active)

    const [showLoading, setShowLoading] = useState(false)

    // Check form validity
    const formValidation = CrsFormFieldValidation({name, crsNames, gender, languages, maxOverallCaseload})

    function save() {
        var isFormFieldsValid = formValidation.validateFormFields()
        if (!isFormFieldsValid) {
            return
        } else {
            setShowLoading(true)
            var crs : CrsType = {
                crs_name: name,
                gender: gender as GenderType,
                able_to_take_penal: canTakePenal,
                able_to_take_non_penal: canTakeNonPenal,
                max_iph_status: iph as IphStatusType,
                hwh_locations:  CrsDataArrayStringify(hwhLocations),
                spoken_languages: CrsDataArrayStringify(languages),
                max_overall_caseload: maxOverallCaseload,
                max_new_caseload: maxNewCaseload,
                is_ground_crs: isGroundCrs,
                is_lcm: isLcm,
                is_active: isActive,
            }
            fetch(formSubmitAddress, {  // Enter your IP address here
                method: 'POST', 
                mode: 'cors',
                body: JSON.stringify(crs), // body data type must match "Content-Type" header
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((res) => {
                // closeModal()
                // setShowLoading(false)
                res.json().then((data) => {
                    setCrsList(data)
                    closeModal()
                    setShowLoading(false)
                })
            })
        }
    }

    return (
        <FormModal isOpen={isOpen} closeModal={closeModal} title="Add new CRS">
            <StatusModal showStatus={showLoading} status="Saving..." />
            <FormInputField title="Name" description="This field cannot be changed after creation.">
                <FormTextInput 
                    name="name" 
                    placeholder="Enter your name" 
                    textInput={name} 
                    setTextInput={setName}
                    inputValidation={formValidation.nameValidProp}
                    disabled={!enableNameField}
                />
            </FormInputField>

            <FormInputField title="Gender">
                <FormDropdownInput
                    options={Genders} 
                    setSelectedOption={(value: GenderType) =>setGender(value)} 
                    selectedOption={gender as GenderType}
                    inputValidation={formValidation.genderValidProp}
                />
            </FormInputField>

            <FormInputField title="Case types">
                <FormToggleInput enabled={canTakePenal} setEnabled={setCanTakePenal} description="Can officer take penal cases?" />
                <FormToggleInput enabled={canTakeNonPenal} setEnabled={setCanTakeNonPenal} description="Can officer take non-penal cases?" />
            </FormInputField>

            <FormInputField title="Max IPH Status" description="What is the maximum IPH status that this officer can handle?">
                <FormDropdownInput
                    options={IphStatuses} 
                    setSelectedOption={(value: IphStatusType) =>setIph(value)} 
                    selectedOption={iph as IphStatusType}
                />
            </FormInputField>

            <FormInputField  title="Spoken Languages">
                <FormMultiSelectDropdownInput 
                    options={languagesList}
                    selectedOptions={languages} 
                    setSelectedOptions={setLanguages} 
                    inputValidation={formValidation.languageValidProp}
                />
            </FormInputField>

            <FormInputField  title="HWH Locations">
                <FormMultiSelectDropdownInput 
                    options={locationsList}
                    selectedOptions={hwhLocations}
                    setSelectedOptions={setHwhLocations}
                />
            </FormInputField>

            <FormInputField title="Caseload">
                <FormNumberInput
                    name="max_overall_caseload"
                    numInput={maxOverallCaseload}
                    setNumInput={setMaxOverallCaseload}
                    inputValidation={formValidation.maxOverallCaseloadValidProp}
                    min={1}
                    description="Maximum number of total caseload at any one time."
                />
                <FormNumberInput
                    name="max_new_caseload"
                    numInput={maxNewCaseload}
                    setNumInput={setMaxNewCaseload}
                    min={0}
                    description="Maximum number of new cases each month."
                />
            </FormInputField>

            <FormInputField title="Status">
                <FormToggleInput enabled={isGroundCrs} setEnabled={setIsGroundCrs} description="Is this a ground officer?" />
                <FormToggleInput enabled={isLcm} setEnabled={setIsLcm} description="Is officer in LCM trial?" />
                <FormToggleInput enabled={isActive} setEnabled={setIsActive} description="Is this an active officer?" />
            </FormInputField>

            <div className="mt-4 flex flex-row justify-center gap-2">
                <ActionButton onClick={save} text='Save' colour='yellow' />
                <ActionButton onClick={closeModal} text='Cancel' colour='grey' />
            </div>
        </FormModal>
    )
}