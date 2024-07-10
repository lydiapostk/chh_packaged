interface GoButtonProp {
    onClick?: () => void;
    description?: string;
    invisible?: boolean;
}

export default function GoButton({onClick, description, invisible}: GoButtonProp) {
    return (
        <button className={invisible ? "invisible" : "outline-none rounded-md p-2 gap-2 inline-flex items-center justify-center text-gray-800 hover:text-white hover:bg-amber-400 hover:underline"} onClick={onClick}>
            <span className="sr-only">Go</span>
            {description && <span className={""}>{description}</span>}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button>
    )
}