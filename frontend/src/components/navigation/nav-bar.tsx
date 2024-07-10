import { useState } from "react"
import DSAISignature from "./dsai-signature"
import DropdownButton from "./nav-dropdown-button"

export default function NavBar({ title, children }: {title: string; children: React.ReactNode}) {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const onClickNavbarDropdown = () => {
        setNavbarOpen(!navbarOpen)
    }
    
    return (
        <div className="min-h-fit flex justify-stretch flex-col place-content-center mt-4 mb-0 lg:flex-row lg:place-content-start">
            <div className="self-start w-full flex flex-row justify-between lg:self-center">
                <a
                href={"/"}
                className={"w-fit self-center border-transparent"}
                >
                    <h2 className="text-2xl text-left font-semibold lg:pr-4">
                        {title}
                    </h2>
                </a>
                <DropdownButton open={navbarOpen} onClick={onClickNavbarDropdown} />
            </div>
            <div className={`${navbarOpen ? "bg-gray-300 h-46" : "h-0"} justify-evenly transition-all duration-300 delay-150 overflow-hidden w-full flex-auto flex flex-col self-center lg:grid lg:grid-cols-3 lg:min-w-min lg:h-auto lg:bg-inherit`}>
                {children}
            </div>
            <div className="invisible self-center flex-shrink h-0 lg:visible lg:min-w-fit lg:h-full">
                <DSAISignature />
            </div>
        </div>
    )
} 