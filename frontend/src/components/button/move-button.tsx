import { ButtonColourToCSS, ButtonProp } from "./button-colour-interface"

interface MoveButtonProp extends ButtonProp {
    isActive?: boolean
}

export default function MoveButton({onClick, text, colour, isActive}: MoveButtonProp) {
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
            className={`${colourCSS} ${inactiveCSS} flex flex-row rounded-md max-w-fit justify-between gap-2 items-center my-1 px-2 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            {text && <div className="absolute invisible lg:visible lg:relative">
                {text}
            </div>}
        </button>
    )
}