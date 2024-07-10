import { ButtonColourToCSS, ButtonProp } from "./button-colour-interface"
interface ActionButtonProp extends ButtonProp {
    isActive?: boolean;
}

export default function ActionButton({onClick, text, colour, isActive}: ActionButtonProp) {
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
            className={`${colourCSS} ${inactiveCSS} rounded-md justify-center px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2`}
        >
            {text}
        </button>
    )
}