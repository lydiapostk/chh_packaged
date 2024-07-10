import GoButton from "@/components/button/go-button"
import FormDropdownInput from "@/components/form/form-dropdown-input"
import FormNumberInput from "@/components/form/form-number-input"
import { MonthType, Months } from "../../../data/month-year"
import CardModal, { CardProp } from "@/components/modal/card.modal"
import FormInputField from "@/components/form/form-input-field"
import FormMultiSelectDropdownInput from "@/components/form/form-multiselect-dropdown-input"

interface CardOneProp extends CardProp {
    goToNextCard: () => void;
    selectedMonth: MonthType;
    setSelectedMonth: (value: MonthType) => void;
    selectedYear: number;
    setSelectedYear: (value: number) => void;
    allCrsNames: string[];
    leavingCrs: string[];
    setLeavingCrs: (values: string[]) => void;
    noNewCaseCrs: string[];
    setNoNewCaseCrs: (values: string[]) => void;
}

export default function CardOne({
    isCardSelected, goToNextCard, showSpinner, 
    selectedMonth, setSelectedMonth, selectedYear, setSelectedYear,
    allCrsNames, leavingCrs, setLeavingCrs, noNewCaseCrs, setNoNewCaseCrs,
}: CardOneProp) {
    return (
        <CardModal 
            isCardSelected={isCardSelected}
            showSpinner={showSpinner}
        >
            <div className="w-20 py-10 flex flex-row gap-2 justify-center">
                <FormDropdownInput options={Months} selectedOption={selectedMonth} setSelectedOption={setSelectedMonth} />
                <FormNumberInput name="Year" numInput={selectedYear} setNumInput={setSelectedYear} />
            </div>
            <div className="text-center py-2">
                <FormInputField  title="Leaving CRS" description="Select those who are leaving this month.">
                    <FormMultiSelectDropdownInput 
                        options={allCrsNames}
                        selectedOptions={leavingCrs}
                        setSelectedOptions={setLeavingCrs}
                    />
                </FormInputField>
            </div>
            <div className="text-center py-2">
                <FormInputField  title="No New Cases" description="Select CRS who are not taking new cases this month.">
                    <FormMultiSelectDropdownInput
                        options={allCrsNames}
                        selectedOptions={noNewCaseCrs}
                        setSelectedOptions={setNoNewCaseCrs}
                    />
                </FormInputField>
            </div>
            <div className="w-20 py-10 flex flex-row gap-2 justify-center">
                <GoButton onClick={goToNextCard} description="Start" />
            </div>
        </CardModal>
    )
}