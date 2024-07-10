import { FormErrorMessageDisplay, FormInputValidationProp, errorDisplayCss } from "./form-input-validation";

interface FormNumberInputProp {
    name: string;
    numInput: number;
    setNumInput: (value: number) => void;
    placeholder?: string;
    disabled?: boolean;
    description?: string;
    inputValidation?: FormInputValidationProp<number>;
    min?: number;
    max?: number;
}

export default function FormNumberInput({name, numInput, setNumInput, placeholder, disabled, description, inputValidation, min, max}: FormNumberInputProp) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumInput(parseInt(event.target.value))
    }

    const isInputInvalid = inputValidation !== undefined && !inputValidation.isValid
    const inputValidationCss = isInputInvalid ? errorDisplayCss : ""

    return (
        <div className="flex flex-col">
            <div className={`${description ? "flex flex-row justify-between items-center" : ""} transition ease-in-out duration-150 sm:text-sm sm:leading-5`}>
                {description && 
                <div className="transition-all duration-75 max-w-fit">
                    {description}
                </div>}

                <input
                    type="number" 
                    name={name}
                    placeholder={placeholder}
                    value={numInput}
                    min={min}
                    max={max}
                    onChange={handleChange}
                    className={`${description ? "w-24" : "min-w-full"} ${inputValidationCss} rounded-md hover:border-gray-500 border border-gray-400 text-left px-4 py-2 placeholder:text-gray-700`} 
                    disabled={disabled}
                    />
            </div>
            {isInputInvalid &&
                <div className="px-4 pr-8 py-1 text-red-400 text-xs">
                    {inputValidation.errorMessage}
                </div>
            }
        </div>
    )
}