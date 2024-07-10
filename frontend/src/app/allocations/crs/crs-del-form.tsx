'use client'
import { Fragment, useState } from 'react'
import { CrsType } from './crs-data'

import ActionButton from '@/components/button/action-button'
import StatusModal from '@/components/status/status-modal'
import { Dialog, Transition } from '@headlessui/react'
import CloseButton from '@/components/button/close-button'

interface CrsDelFormProp {
    isOpen: boolean;
    closeModal: () => void;
    crsName: string;
    setCrsList: (values: CrsType[]) => void;
}

export default function CrsDelForm({isOpen, closeModal, crsName, setCrsList}: CrsDelFormProp) {

    const [showLoading, setShowLoading] = useState(false)

    function confirmDelete() {
        setShowLoading(true)
        fetch('/database/delete_crs', {  // Enter your IP address here
            method: 'POST', 
            mode: 'cors',
            body: JSON.stringify({crs_name: crsName}), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            res.json().then((data) => {
                setCrsList(data)
                closeModal()
                setShowLoading(false)
            })
        })
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 overflow-auto" onClose={()=>{}}>
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
                    <div className="flex min-h-fit h-full items-center justify-center p-4 text-center">
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
                                        Delete CRS
                                    </Dialog.Title>
                                    
                                    <CloseButton onClick={closeModal} />
                                </div>
                        
                                <StatusModal showStatus={showLoading} status="Deleting..." />
                                <div>
                                    Confirm delete 
                                    <p className="inline-flex items-baseline px-2 font-bold text-yellow-700">{crsName}</p> 
                                    permanently?
                                </div>
                                
                                <div>
                                    Please only delete officer if this entry was a mistake.
                                </div>

                                <div>
                                    If officer is leaving, you are recommended to change 
                                    <p className="inline-flex items-baselinep-2 font-bold px-2 text-yellow-500">Is this an active officer</p> 
                                    status to 
                                    <p className="inline-flex items-baselinep-2 font-bold px-2 text-yellow-500">No</p> 
                                    instead.
                                </div>

                                <div className="mt-4 flex flex-row h-full items-center object-center gap-2">
                                    <ActionButton onClick={confirmDelete} text='Delete' colour='red' />
                                    <ActionButton onClick={closeModal} text='Cancel' colour='grey' />
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}