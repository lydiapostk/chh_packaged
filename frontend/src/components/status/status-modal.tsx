import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import Spinner from "./spinner";

interface StatusModalProp {
    showStatus: boolean;
    status: string;
}

export default function StatusModal({showStatus, status}: StatusModalProp) {
    return (
        <Transition appear show={showStatus} as={Fragment}>
            <Dialog as="div" className="relative z-50 overflow-auto" onClose={() => {}}>
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
                    <div className="flex h-full items-center justify-center p-4 text-center">
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
                                        className="text-lg font-medium leading-6 text-gray-900 flex flex-row"
                                    >
                                        <Spinner height="h-6" width="w-6"/>
                                        {status}
                                    </Dialog.Title>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}