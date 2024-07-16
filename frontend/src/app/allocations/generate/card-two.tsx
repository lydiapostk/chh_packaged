import FileUpload from "@/components/files/file-upload";
import CardModal, { CardProp } from "@/components/modal/card.modal";
import { useState } from "react";
import { CrsDatabaseColumnNameToKey, DataTableType, EmplacementListColumnNameToKey, checkEmplacementDataColumns } from "./emplacement-data";
import { ExpectedSheetsProp } from "@/components/files/file-processing";

interface CardTwoProp extends CardProp {
    goToNextCard: () => void;
    setCrsDatabase: (value: DataTableType) => void;
    setEmplacementList: (value: DataTableType) => void;
}

export default function CardTwo({
    isCardSelected, goToNextCard, goToPreviousCard, showSpinner,
    setCrsDatabase, setEmplacementList,
}: CardTwoProp) {

    const [crsDatabaseFileName, setCrsDatabaseFileName] = useState<string>("")
    const [emplacementListFileName, setEmplacementListFileName] = useState<string>("")

    const [emplacementListError, setEmplacementListError] = useState("")
    const [crsDatabaseError, setCrsDatabaseError] = useState("")

    function handleGoToNextCard() {
        if (crsDatabaseFileName.length === 0) {
            setCrsDatabaseError("Please upload a file!")
        } 
        
        if (emplacementListFileName.length === 0) {
            setEmplacementListError("Please upload a file!")
        } 
        
        if (crsDatabaseFileName.length > 0 && emplacementListFileName.length > 0) {
            goToNextCard()
        }
    }

    const crsDatabaseFileProp : ExpectedSheetsProp = [{
        "setFileDataTable": setCrsDatabase, 
        "renameHeaders": (header:string)=>{return CrsDatabaseColumnNameToKey.getValue(header)},
        "headersValidation": checkEmplacementDataColumns("CrsDatabase"),
    }]
    const emplacementFileProp : ExpectedSheetsProp = [{
        "setFileDataTable": setEmplacementList,
        "renameHeaders": (header:string)=>{return EmplacementListColumnNameToKey.getValue(header)},
        "headersValidation": checkEmplacementDataColumns("EmplacementList"),
    }]

    return (
        <CardModal 
            isCardSelected={isCardSelected} 
            goToNextCard={handleGoToNextCard} 
            goToPreviousCard={goToPreviousCard} 
            title={"Upload Datasets"}
            showSpinner={showSpinner}
        >
                <div className="block py-2">
                    <p className="inline-flex underline decoration-double font-mono text-lg">CRS Database</p>
                    : Used for calculating CRS caseload, and filtering cases belonging to leaving CRS.
                </div>
                <div className="w-5/6 lg:w-4/6">
                    <FileUpload
                        fileName={crsDatabaseFileName}
                        setFileName={setCrsDatabaseFileName}
                        expectedSheetsProp={crsDatabaseFileProp}
                        errorMessage={crsDatabaseError} setErrorMessage={setCrsDatabaseError}

                    />
                </div>
                <div className="block py-2">
                    <p className="inline-flex underline decoration-double font-mono text-lg">Emplacement Dataset</p>
                    : New CHH supervisees will be filtered from list of all newly emplaced supervisees.
                </div>
                <div className="w-5/6 lg:w-4/6">
                    <FileUpload
                        fileName={emplacementListFileName}
                        setFileName={setEmplacementListFileName}
                        expectedSheetsProp={emplacementFileProp}
                        errorMessage={emplacementListError} setErrorMessage={setEmplacementListError}
                    />
                </div>
        </CardModal>
    )
}