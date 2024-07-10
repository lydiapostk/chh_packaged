import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import CloseButton from '../button/close-button';

interface PopUpModalProp {
    isOpen:boolean;
    closeModal: () => void;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function popUpModal({isOpen, closeModal, title, children, className}: PopUpModalProp) {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className={`relative z-10 overflow-auto`} onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto object-center">
                    <div className={`flex min-h-fit items-center justify-center p-4 text-center ${className}`}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="min-w-5/6 lg:min-w-3/6 transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="static flex flex-row justify-between place-items-center">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    
                                    <CloseButton onClick={closeModal} />
                                </div>
                            {children}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}