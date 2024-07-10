import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { FormInputValidationProp, errorDisplayCss } from "./form-input-validation";

interface FormDropdownInputProp<T> {
    options: Array<T>;
    selectedOption: T;
    setSelectedOption: (value: T) => void;
    placeholder?: string;
    inputValidation?: FormInputValidationProp<T>
}

export default function FormDropdownInput<T extends string | number>(
    {options, selectedOption, setSelectedOption, placeholder, inputValidation}: FormDropdownInputProp<T>
) {

    const isInputInValid = inputValidation !== undefined && !inputValidation.isValid
    const inputValidationCss = isInputInValid ? errorDisplayCss : ""

    return (
        <Listbox value={selectedOption} onChange={setSelectedOption}>
            <div className="grid-rows-2">
                <Listbox.Button className={`${inputValidationCss} relative w-auto text-left rounded-md bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5`}>
                    {
                        ((selectedOption === "") || (selectedOption === 0)) ?
                            <span className="block truncate text-gray-700">
                                {placeholder? placeholder : "Select an option"}
                            </span>
                        :
                            <span className="block truncate">
                                {selectedOption}
                            </span>
                            
                    }
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </Listbox.Button>
                <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {options.map((option) => (
                        <Listbox.Option 
                            key={option} 
                            value={option} 
                            className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-amber-100 hover:text-amber-900"
                        >
                            <span
                                className={`block truncate ${
                                option === selectedOption ? 'font-medium' : 'font-normal'
                            }`}>
                                {option}
                            </span>
                            {option === selectedOption && (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
                {isInputInValid &&
                    <div className="px-4 pr-8 py-1 text-red-400 text-xs">
                        {inputValidation.errorMessage}
                    </div>
                }
            </div>
        </Listbox>
    )
}