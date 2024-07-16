import BackButton from "@/components/button/back-button"
import GoButton from "@/components/button/go-button"
import { Transition } from "@headlessui/react"
import Spinner from "../status/spinner";

export interface CardProp {
    isCardSelected: boolean;
    goToNextCard?: () => void;
    goToPreviousCard?: () => void;
    title?: string;
    showSpinner?: boolean;
    children?: React.ReactNode;
}

export default function CardModal(
    {isCardSelected, goToNextCard, goToPreviousCard, title, showSpinner, children}: CardProp
) {
    if (showSpinner===undefined) {
        showSpinner = false
    }

    return (
        <Transition
                appear={true}
                show={isCardSelected}
                enter="transition-opacity ease-in-out duration-500 transform"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in-out duration-0 transform"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="max-w-full"
            >
                <div className="w-auto h-auto flex flex-col place-items-center">
                    <div className="w-full my-5 flex flex-row justify-between">
                        <div className="h-10 self-center">
                            {goToPreviousCard && <BackButton onClick={goToPreviousCard} description='Prev'/>}
                            {goToPreviousCard && <BackButton description='Prev' invisible={true}/>}
                        </div>
                        <div className="text-2xl font-medium py-2 lg:py-8">
                            {title}
                        </div>
                        <div className="h-10 self-center">
                            {goToNextCard && <GoButton onClick={goToNextCard} description='Next'/>}
                            {!goToNextCard && <GoButton description='Next' invisible={true} />}
                        </div>
                    </div>
                    {showSpinner && <Spinner width="w-12" height="h-12" />}
                    {!showSpinner && children}
                </div>
            </Transition>
    )
}