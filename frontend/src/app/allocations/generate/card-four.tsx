'use client'
import CardModal, { CardProp } from "@/components/modal/card.modal";
import { Tab } from "@headlessui/react";
import { NavigationTab } from "@/components/navigation/nav-tab";
import { CrsResultsColumnNameToKey, DataTableType, SupsResultsColumnNameToKey } from "./emplacement-data";
import SupsTable, {supsType} from "./sups-table";
import CrsTable from "./crs-table";
import { useState } from "react";
import DownloadButton from "@/components/button/download-button";

interface CardFourProp extends CardProp {
    crsEmplacementResult: DataTableType,
    chhSupEmplacementResult: DataTableType,
    setChhSupEmplacementResult: (updatedChhSupEmplacementResult: DataTableType) => void,
    updateSup: (sup: {[header: string]: string}, oldCrs: string) => void,
    downloadResults: () => void,
}

export default function CardFour({
    isCardSelected, goToNextCard, goToPreviousCard, showSpinner,
    crsEmplacementResult, chhSupEmplacementResult, setChhSupEmplacementResult, updateSup,
    downloadResults,
}: CardFourProp) {

    var crsForEmplacementNames = crsEmplacementResult.filter(crs => !crs['is_leaving'] && !crs['no_new_case']).map(crs => crs['crs_name'])

    const [showSupsType, setShowSupsType] = useState<supsType>("all")
    function onToggleSupsTypeTab(index: number) {
        switch(index){
            case 0:
                setShowSupsType("all")
                break
            case 1:
                setShowSupsType("penal/black")
                break
            case 2:
                setShowSupsType("leaving")
                break
        }
    }

    function selectedSupsTypeTabIndex() {
        switch(showSupsType){
            case "all":
                return 0
            case "penal/black":
                return 1
            case "leaving":
                return 2
        }
    }

    return (
        <CardModal 
            isCardSelected={isCardSelected} 
            goToNextCard={goToNextCard} 
            goToPreviousCard={goToPreviousCard} 
            title={"Emplacement result"}
            showSpinner={showSpinner}
        >   
            <div className="py-2">
                <DownloadButton onClick={downloadResults} text="Download" colour="yellow" />
            </div>
            <Tab.Group>
                <NavigationTab tabTitles={["Supervisees", "Caseworkers"]} />
                <Tab.Panels>
                    <Tab.Panel key="Supervisees">
                    <Tab.Group onChange={onToggleSupsTypeTab} selectedIndex={selectedSupsTypeTabIndex()} >
                        <NavigationTab tabTitles={["All", "Penal or black cases", "Leaving caseworkers' cases"]} />
                    </Tab.Group>
                    <SupsTable 
                        superviseesInfo={chhSupEmplacementResult} 
                        setChhSuperviseesInfo={setChhSupEmplacementResult} 
                        showSupsType={showSupsType} 
                        columnNameKeyMap={SupsResultsColumnNameToKey}
                        supEditType="assignCRS"
                        crsNames={crsForEmplacementNames}
                        updateSup={updateSup}
                    />
                    </Tab.Panel>
                    <Tab.Panel key="Crs">
                        <CrsTable 
                            crsInfo={crsEmplacementResult} 
                            showCrsType={'taking new cases'} 
                            columnNameKeyMap={CrsResultsColumnNameToKey}
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </CardModal>
    )
}