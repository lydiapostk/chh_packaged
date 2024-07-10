import Image from 'next/image'

interface DropdownButtonProp {
    open: boolean;
    onClick: ()=>void;
}

export default function DropdownButton({open, onClick}: DropdownButtonProp) {
    return (
        <div className={`flex items-end align-end place-items-center p-2`} onClick={onClick}>
            <Image
              src="/navbar_dropdown.png"
              alt="Dropdown Menu"
              className={`${open ? "rotate-180 brightness-0" : ""} self-center transition-all ease-in-out hover:brightness-50 lg:hidden`}
              width={22}
              height={22}
              onClick={onClick}
            />
        </div>
    )
}