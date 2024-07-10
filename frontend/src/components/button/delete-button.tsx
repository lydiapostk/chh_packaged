import { ButtonColourToCSS, ButtonProp } from "./button-colour-interface"

interface DeleteButtonProp extends ButtonProp {
    isActive?: boolean
}

export default function DeleteButton({onClick, text, colour, isActive}: DeleteButtonProp) {
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            {text && <div className="absolute invisible lg:visible lg:relative">
                {text}
            </div>}
        </button>
    )
}