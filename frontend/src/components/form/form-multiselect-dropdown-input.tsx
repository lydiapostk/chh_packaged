'use client'
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { FormInputValidationProp, errorDisplayCss } from "./form-input-validation";

interface FormMultiSelectDropdownInputProp<T extends string> {
    options: Array<T>;
    selectedOptions: Array<T>;
    setSelectedOptions: (values: Array<T>) => void;
    placeholder?: string;
    inputValidation?: FormInputValidationProp<T>;
}

export default function FormMultiSelectDropdownInput<T extends string>(
    {options, selectedOptions, setSelectedOptions, placeholder, inputValidation}: FormMultiSelectDropdownInputProp<T>
) {
    
    const isInputInvalid = inputValidation !== undefined && !inputValidation.isValid
    const inputValidationCss = isInputInvalid ? errorDisplayCss : ""
    
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)

    const onSelect = (option: T) => {
        if (selectedOptions.includes(option)) {
            removeSelectedOption(option)
        } else {
            setSelectedOptions([...selectedOptions, option])
        }
    }

    const removeSelectedOption = (option: T) => {
        setSelectedOptions(selectedOptions.filter(prevSelectedOption => prevSelectedOption !== option))
    }

    return (
        <Listbox value={selectedOptions.map((option) => {`\'${option}\'`}).join(',')} onChange={onSelect}>
            <div className="flex flex-col relative">
                <Listbox.Button onClick={() => setIsOptionsOpen(!isOptionsOpen)} className={`${inputValidationCss} relative min-w-full text-left rounded-md border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5`}>
                    {
                        selectedOptions.length > 0 ?
                            <span className="block inline flex flex-wrap flex-row justify-start gap-1">
                                {selectedOptions.map(option => 
                                    <div key={option} className="flex flex-row justify-between items-center gap-1 bg-gray-50 p-1.5 border">
                                        {option}
                                        <svg 
                                            onClick={(e) => {e.stopPropagation(); removeSelectedOption(option)}} 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            strokeWidth="1.5" 
                                            stroke="currentColor" 
                                            className="w-5 h-5 p-0.5 hover:bg-gray-100"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                )}
                            </span>
                        :
                            <span className="block truncate text-gray-700">
                                {placeholder? placeholder : "Select an option"}
                            </span>
                    }
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </Listbox.Button>
                {isInputInvalid &&
                    <div className="x-4 pr-8 py-1 text-red-400 text-xs">
                        {inputValidation.errorMessage}
                    </div>
                }
                <div className="static">
                    {isOptionsOpen && <Listbox.Options static className="z-20 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {options.map((option) => (
                            <Listbox.Option 
                                key={option} 
                                value={option} 
                                className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-amber-100 hover:text-amber-900"
                            >
                                <span
                                    className={`block truncate ${
                                        selectedOptions.includes(option) ? 'font-medium' : 'font-normal'
                                }`}>
                                    {option}
                                </span>
                                {selectedOptions.includes(option) && (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>}
                </div>
            </div>
        </Listbox>
    )
}