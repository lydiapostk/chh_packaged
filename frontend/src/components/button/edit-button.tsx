import { ButtonColourToCSS, ButtonProp } from "./button-colour-interface"

interface EditButtonProp extends ButtonProp {
    isActive?: boolean
}

export default function EditButton({onClick, text, colour, isActive}: EditButtonProp) {
    var colourCSS = ButtonColourToCSS[colour]
    var inactiveCSS = (isActive != undefined && !isActive) ? "opacity-25 pointer-events-none" : ""
    
    function handleOnClick() {
        if (isActive != undefined && !isActive) {
            return
        }
        onClick()
    }

    return (
        <button
            type="button"
            onClick={handleOnClick}
            className={`${colourCSS} ${inactiveCSS} flex flex-row rounded-md max-w-fit justify-between gap-2 items-center px-2 py-2 my-1 text-sm font-semibold focus:outline-none focus-visible:ring-2`}
        >
            <svg className="h-5 w-5"  fill="none" viewBox="0 0 28 28" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            {text && <div className="absolute invisible lg:visible lg:relative">
                {text}
            </div>}
        </button>
    )
}