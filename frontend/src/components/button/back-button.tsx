interface BackButtonProp {
    onClick?: () => void;
    description?: string;
    invisible?: boolean;
}

export default function BackButton({onClick, description, invisible}: BackButtonProp) {
    return (
        <button className={invisible ? "invisible" : "outline-none rounded-md p-2 gap-2 inline-flex items-center justify-center text-gray-800 hover:text-white hover:bg-amber-400 hover:underline"} onClick={onClick}>
            <span className="sr-only">Go</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>
            {description && <span className="">{description}</span>}
        </button>
    )
}