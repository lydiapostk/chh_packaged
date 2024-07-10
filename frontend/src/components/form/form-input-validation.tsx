export interface FormInputValidationProp<T> {
    isValid: boolean;
    errorMessage: string; 
}

export const errorDisplayCss = "ring-offset-2 ring-1 ring-red-400"

export function FormErrorMessageDisplay(errorMessage:{errorMessage: string}) {
    return (
        <div className="px-4 pr-8 py-1 text-red-400 text-xs">
            {errorMessage.toString()}
        </div>
    )
}