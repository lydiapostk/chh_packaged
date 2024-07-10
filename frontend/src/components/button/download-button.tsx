import { ButtonColourToCSS, ButtonProp } from "./button-colour-interface"

interface DownloadButtonProp extends ButtonProp {
    isActive?: boolean;
}

export default function DownloadButton({onClick, text, colour, isActive}: DownloadButtonProp) {
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
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
            </svg>
            <div className="absolute invisible lg:visible lg:relative">
                {text}
            </div>
        </button>
    )
}