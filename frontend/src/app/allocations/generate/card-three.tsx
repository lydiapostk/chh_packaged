'use client'
import CardModal, { CardProp } from "@/components/modal/card.modal";
import { Tab } from "@headlessui/react";
import { NavigationTab } from "@/components/navigation/nav-tab";
import { DataTableType, InterimCrsColumnNameToKey, InterimSupsColumnNameToKey } from "./emplacement-data";
import SupsTable, {supsType} from "./sups-table";
import CrsTable, {crsType} from "./crs-table";
import { useState } from "react";

interface CardThreeProp extends CardProp {
    crsProcessedInfo: DataTableType,
    chhSuperviseesInfo: DataTableType,
    setChhSuperviseesInfo: (updatedTable: DataTableType) => void,
}

export default function CardThree({
    isCardSelected, goToNextCard, goToPreviousCard,
    crsProcessedInfo, chhSuperviseesInfo, setChhSuperviseesInfo,
}: CardThreeProp) {

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
    
    const [showCrsType, setShowCrsType] = useState<crsType>("all")
    function onToggleCrsTypeTab(index: number) {
        switch(index){
            case 0:
                setShowCrsType("all")
                break
            case 1:
                setShowCrsType("on hiatus")
                break
            case 2:
                setShowCrsType("leaving")
                break
        }
    }
    function selectedCrsTypeTabIndex() {
        switch(showCrsType){
            case "all":
                return 0
            case "on hiatus":
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
            title={"Check emplacement data"}
        >
            <Tab.Group>
                <NavigationTab tabTitles={["Supervisees", "Caseworkers"]} />=
                <Tab.Panels className="max-w-full max-h-full">
                    <Tab.Panel key="Supervisees">
                        <Tab.Group onChange={onToggleSupsTypeTab} selectedIndex={selectedSupsTypeTabIndex()} >
                            <NavigationTab tabTitles={["All", "Penal or black cases", "Leaving caseworkers' cases"]} />
                        </Tab.Group>
                        <SupsTable 
                            superviseesInfo={chhSuperviseesInfo} 
                            setChhSuperviseesInfo={setChhSuperviseesInfo} 
                            columnNameKeyMap={InterimSupsColumnNameToKey}
                            showSupsType={showSupsType}
                            supEditType="toggleEmplacement"
                            />
                    </Tab.Panel>
                    <Tab.Panel key="Crs">
                        <Tab.Group onChange={onToggleCrsTypeTab} selectedIndex={selectedCrsTypeTabIndex()} >
                            <NavigationTab tabTitles={["All", "On hiatus", "Leaving caseworkers"]} />
                        </Tab.Group>
                        <CrsTable crsInfo={crsProcessedInfo} showCrsType={showCrsType} columnNameKeyMap={InterimCrsColumnNameToKey} />
                    </Tab.Panel>
                </Tab.Panels>=
            </Tab.Group>
        </CardModal>
    )
}