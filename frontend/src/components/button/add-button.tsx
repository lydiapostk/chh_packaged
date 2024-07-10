import { ButtonColourToCSS, ButtonProp } from "./button-colour-interface"

interface AddButtonProp extends ButtonProp {
    isActive?: boolean;
}

export default function AddButton({onClick, text, colour, isActive}: AddButtonProp) {
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
            className={`${colourCSS} ${inactiveCSS} flex flex-row rounded-md justify-between gap-2 items-center px-3 py-2 text-sm font-semibold focus:outline-none focus-visible:ring-2`}
        >
            <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"
            />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <div className="absolute invisible lg:visible lg:relative">
                {text}
            </div>
        </button>
    )
}