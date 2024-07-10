'use client'
import { useState } from "react"

import { FormInputValidationProp } from "@/components/form/form-input-validation"
import { GenderType, Genders } from "@/data/personal-info"

interface CrsFormFieldValidationProp {
    name: string;
    crsNames?: string[];
    gender: string;
    languages: string[];
    maxOverallCaseload: number;
}

export const CrsFormFieldValidation = function ({name, crsNames, gender, languages, maxOverallCaseload}: CrsFormFieldValidationProp) {
    const [isNameValid, setIsNameValid] = useState(true)
    const [isNameDuplicated, setIsNameDuplicated] = useState(true)
    const [isGenderValid, setIsGenderValid] = useState(true)
    const [isLanguagesValid, setIsLanguagesValid] = useState(true)
    const [isMaxOverallCaseloadValid, setIsMaxOverallCaseloadValid] = useState(true)
    const nameValidProp: FormInputValidationProp<string> = {
        isValid: isNameValid && isNameDuplicated,
        errorMessage: "Name already exists or is empty",
    }
    const genderValidProp: FormInputValidationProp<string> = {
        isValid: isGenderValid,
        errorMessage: "Gender is either 'M' or 'F'. Invalid input value!",
    }
    const languageValidProp: FormInputValidationProp<string> = {
        isValid: isLanguagesValid,
        errorMessage: "CRS must speak at least one language!",
    }
    const maxOverallCaseloadValidProp: FormInputValidationProp<string> = {
        isValid: isMaxOverallCaseloadValid,
        errorMessage: "CRS must take at least one case!",
    }

    const validateFormFields: () => boolean = function () {
        setIsNameValid(name !== "")
        if (crsNames) {
            setIsNameDuplicated(!crsNames.includes(name))
        }
        setIsGenderValid(Genders.includes(gender as GenderType))
        setIsLanguagesValid(languages.length > 0)
        setIsMaxOverallCaseloadValid(maxOverallCaseload > 0)

        return name !== "" && (!crsNames || !crsNames.includes(name)) && Genders.includes(gender as GenderType) && languages.length > 0 && maxOverallCaseload > 0
    }

    return {
        nameValidProp,
        genderValidProp,
        languageValidProp,
        maxOverallCaseloadValidProp,
        validateFormFields, 
    }
}