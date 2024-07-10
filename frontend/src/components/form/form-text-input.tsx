import { FormInputValidationProp, errorDisplayCss } from "./form-input-validation";

interface FormTextInputProp {
    name: string;
    textInput: string;
    setTextInput: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    inputValidation?: FormInputValidationProp<string>;
}

export default function FormTextInput({name, textInput, setTextInput, placeholder, disabled, inputValidation}: FormTextInputProp) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.target.value)
    }

    const isInputInvalid = inputValidation !== undefined && !inputValidation.isValid
    const inputValidationCss = isInputInvalid ? errorDisplayCss : ""

    return (
        <div className="transition ease-in-out duration-150 sm:text-sm sm:leading-5">
            <input
                type="text" 
                name={name}
                placeholder={placeholder}
                value={textInput}
                onChange={handleChange}
                className={`rounded-md hover:border-gray-500 border border-gray-400 text-left min-w-full px-4 py-2 pr-8 placeholder:text-gray-700 ${inputValidationCss}`}
                disabled={disabled}
            />
            {(inputValidation !== undefined && !inputValidation.isValid) &&
                <div className="px-4 pr-8 py-1 text-red-400 text-xs">
                    {inputValidation.errorMessage}
                </div>
            }
        </div>
    )
}