'use client'
import { useEffect, useState } from 'react'
import { MonthToInt, MonthType, Months } from '../../../data/month-year'
import CardOne from './card-one'
import CardTwo from './card-two'
import { CrsDatabaseColumnNameToKey, CrsEmplacementFullCreateInfoType, CrsEmplacementPartialInfoType, CrsUpdateSuperviseeType, DataTableType } from './emplacement-data'
import CardThree from './card-three'
import CardFour from './card-four'
import * as XLSX from 'xlsx';
import PopUpModal from '@/components/modal/pop-up-modal'


export default function ViewAllAllocations() {
    
    const [error, setError] = useState("")

    const [selectedCard, setSelectedCard] = useState(1)
    const [showSpinner, setShowSpinner] = useState(true)
    
    // Card one attributes
    const currentMonth = ((new Date()).getMonth() + 3) % 12 // Emplacement is usually three months in advance
    const currentYear = (new Date()).getFullYear() + (currentMonth > (new Date()).getMonth() ? 0 : 1) // Emplacement year may be next year
    const [selectedMonth, setSelectedMonth] = useState<MonthType>(Months[currentMonth])
    const [selectedYear, setSelectedYear] = useState(currentYear)
    const [leavingCrs, setLeavingCrs] = useState<string[]>([])
    const [noNewCaseCrs, setNoNewCaseCrs] = useState<string[]>([])
    const [allCrsNames, initAllCrsNames] = useState<string[]>([])
    useEffect(() => {
        // All /database/* requests will be redirected to flask server
        fetch("/database/get_active_crs_names").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                initAllCrsNames(data)
                setShowSpinner(false)
            })
        );
    }, []);
    function cardOneGoToNext() {
        var all_crs_info: CrsEmplacementPartialInfoType[] = allCrsNames.map(name => {
            return {
                crs_name: name,
                is_leaving: leavingCrs.includes(name),
                no_new_cases: noNewCaseCrs.includes(name),
            }
        })
        var crsEmplacementFullInfo: CrsEmplacementFullCreateInfoType = {
            month: MonthToInt(selectedMonth),
            year: selectedYear,
            all_crs_info: all_crs_info,
        }
        fetch('/database/upsert_crs_emplacement_info_no_caseload', {
            method: 'POST', 
            mode: 'cors',
            body: JSON.stringify(crsEmplacementFullInfo), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(() => {
            setSelectedCard(2)
        }).catch(error => {
            setError((error as Error).message)
        })
    }

    // Card two attributes
    const [crsDatabase, setCrsDatabase] = useState<DataTableType>([])
    const [emplacementList, setEmplacementList] = useState<DataTableType>([])
    function cardTwoGoToNext() {
        setShowSpinner(true)
        var all_crs_info: CrsEmplacementPartialInfoType[] = allCrsNames.map(name => {
            return {
                crs_name: name,
                is_leaving: leavingCrs.includes(name),
                no_new_cases: noNewCaseCrs.includes(name),
            }
        })
        fetch('/database/filter_supervisees', {
            method: 'POST', 
            mode: 'cors',
            body: JSON.stringify({
                month: MonthToInt(selectedMonth),
                year: selectedYear,
                crs_info: all_crs_info,
                crs_database: crsDatabase as DataTableType,
                emplacement_list: emplacementList as DataTableType,
            }), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            res.json().then((data) => {
                setSelectedCard(3)
                setCrsProcessedInfo(JSON.parse(data['crs']))
                setChhSuperviseesInfo(JSON.parse(data['sups']))
            }).catch(() => {
                setError(`${res.status}: ${res.statusText}`)
            })
        }).catch(error => {
            setError((error as Error).message)
        }).finally(() => {
            setShowSpinner(false)
        })
    }

    // Card three attributes
    const [crsProcessedInfo, setCrsProcessedInfo] = useState<DataTableType>([])
    const [chhSuperviseesInfo, setChhSuperviseesInfo] = useState<DataTableType>([])
    function cardThreeGoToNext() {
        setShowSpinner(true)
        setSelectedCard(4)
        var update_sups: CrsUpdateSuperviseeType = {
            month: MonthToInt(selectedMonth),
            year: selectedYear,
            crs_info: crsProcessedInfo,
            chh_supervisees_info: chhSuperviseesInfo,
        }
        fetch('/database/emplace_chh_supervisees', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(update_sups), // body data type must match "Content-Type" header
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            res.json().then((data) => {
                setCrsEmplacementResult(JSON.parse(data['crs']))
                setChhSupEmplacementResult(JSON.parse(data['sups']))
            }).catch(() => {
                setError(`${res.status}: ${res.statusText}`)
            })
        }).catch(error => {
            setError((error as Error).message)
        }).finally(() => {
            setShowSpinner(false)
        })
    }
    
    // Card four attributes
    const [crsEmplacementResult, setCrsEmplacementResult] = useState<DataTableType>([])
    const [chhSupEmplacementResult, setChhSupEmplacementResult] = useState<DataTableType>([])
    function updateSupAssignment(targetSup: {[header: string]: string}, oldCrsName: string) {
        var oldCrsUpdated = crsEmplacementResult.find(maybeCrs=>maybeCrs.crs_name==oldCrsName)
        if (oldCrsUpdated) {
            oldCrsUpdated.num_new_cases = (parseInt(oldCrsUpdated.num_new_cases) - 1).toString()
            oldCrsUpdated.new_caseload = (parseInt(oldCrsUpdated.new_caseload) - 1).toString()
            setCrsEmplacementResult([
                ...crsEmplacementResult.filter((maybeCrs) => {return maybeCrs.crs_name != oldCrsName}),
                oldCrsUpdated,
            ].sort((a, b) => {return a.crs_name.localeCompare(b.crs_name)}))
        } 
        var newCrsUpdated = crsEmplacementResult.find(maybeCrs=>maybeCrs.crs_name==targetSup.crs_name)
        if (newCrsUpdated) {
            newCrsUpdated.num_new_cases = (parseInt(newCrsUpdated.num_new_cases) + 1).toString()
            newCrsUpdated.new_caseload = (parseInt(newCrsUpdated.new_caseload) + 1).toString()
            setCrsEmplacementResult([
                ...crsEmplacementResult.filter((maybeCrs) => {return maybeCrs.crs_name != targetSup.crs_name}),
                newCrsUpdated,
            ].sort((a, b) => {return a.crs_name.localeCompare(b.crs_name)}))
        }
        setChhSupEmplacementResult([...chhSupEmplacementResult.filter(
            (maybeSup) => {return maybeSup.name != targetSup.name}), targetSup
        ].sort((a, b) => {return a.name.localeCompare(b.name)}))
    }
    function downloadResults() {
        var chhSupsResultsHeaders = CrsDatabaseColumnNameToKey.getKeyList()
        var chhSupDownload = chhSupEmplacementResult.map(sup => {
            delete sup.crs_last_updated_month; 
            delete sup.crs_last_updated_year;
            for (var test in sup) {
                sup[CrsDatabaseColumnNameToKey.getIndexOfValue(test)] = sup[test]
                delete sup[test]
            };
            return sup
        })
        var workbook = XLSX.utils.book_new()
        XLSX.utils.sheet_add_aoa(workbook, [chhSupsResultsHeaders])
        var supsWorksheet = XLSX.utils.sheet_add_json(
            workbook,
            chhSupDownload,
            { origin: 'A2', skipHeader: true},
        )
        XLSX.utils.book_append_sheet(workbook, supsWorksheet, "Supervisees");
        var crsWorksheet = XLSX.utils.json_to_sheet(
            crsEmplacementResult.map(crs => { delete crs.month; delete crs.year; return crs})
        )
        XLSX.utils.book_append_sheet(workbook, crsWorksheet, "CRS");
        XLSX.writeFile(workbook, `${selectedMonth}${selectedYear}.xlsx`);
    }
    
    return (
        <>
            <CardOne 
                isCardSelected={selectedCard === 1} 
                goToNextCard={cardOneGoToNext} 
                selectedMonth={selectedMonth} 
                setSelectedMonth={setSelectedMonth}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                allCrsNames={allCrsNames}
                leavingCrs={leavingCrs}
                setLeavingCrs={setLeavingCrs}
                noNewCaseCrs={noNewCaseCrs}
                setNoNewCaseCrs={setNoNewCaseCrs}
                showSpinner={showSpinner}
            />
            <CardTwo 
                isCardSelected={selectedCard === 2} 
                goToPreviousCard={()=>{setSelectedCard(1)}}
                goToNextCard={cardTwoGoToNext}
                setCrsDatabase={setCrsDatabase}
                setEmplacementList={setEmplacementList}
                showSpinner={showSpinner}
            />
            <CardThree 
                isCardSelected={selectedCard === 3}
                goToPreviousCard={()=>{setSelectedCard(2)}}
                goToNextCard={cardThreeGoToNext}
                crsProcessedInfo={crsProcessedInfo}
                chhSuperviseesInfo={chhSuperviseesInfo}
                setChhSuperviseesInfo={setChhSuperviseesInfo}
                showSpinner={showSpinner}
            />
            <CardFour 
                isCardSelected={selectedCard === 4}
                goToPreviousCard={()=>{setSelectedCard(3)}}
                crsEmplacementResult={crsEmplacementResult}
                chhSupEmplacementResult={chhSupEmplacementResult}
                setChhSupEmplacementResult={setChhSupEmplacementResult}
                updateSup={updateSupAssignment}
                downloadResults={downloadResults}
                showSpinner={showSpinner}
            />
            <PopUpModal isOpen={error!=""} closeModal={() => {setError("")}} title={'There was a problem with the files'}>    
                {error}
            </PopUpModal> 
        </>
    )
}