import { BiStringMap } from "@/utils/bistring-map"

export interface CrsEmplacementPartialInfoType {
    crs_name: string,
    is_leaving: boolean,
    no_new_cases: boolean,
    old_caseload?: number,
}

export interface CrsEmplacementFullCreateInfoType {
    month: number,
    year: number,
    all_crs_info: CrsEmplacementPartialInfoType[],
}

export interface CrsEmplacementSuperviseeInfoType {
    month: number,
    year: number,
    crs_database: DataTableType,
    emplacement_list: DataTableType,
}


export interface CrsUpdateSuperviseeType {
    month: number,
    year: number,
    crs_info: DataTableType,
    chh_supervisees_info: DataTableType,
}

export interface UpdateSuperviseeCrsAssignmentType {
    month: number,
    year: number,
    sup_name: string,
    crs_name: string,
}

export type DataTableType = {[header: string]: string}[]

export const EmplacementListColumnNameToKey = new BiStringMap({
    'Date Updated': 'date_updated',
    'Remarks': 'remarks',
    'Prison No': 'prison_no',
    'Name': 'name',
    'NRIC': 'nric',
    'Location': 'location',
    'Emplacement Date': 'start_date',
    'Cohort Number': 'cohort_no',
    'CBP Scheme': 'cbp_scheme',
    'CBP Location': 'cbp_location', 
    'CBP Duration': 'cbp_duration', 
    'Medical Fitness Status': 'medical_status', 
    'Sexual / Violent\nAlert Rating': 'iph_status', 
    'STRAT-G': 'bin', 
    'Offence Category': 'offence_category', 
    'Admission Date': 'admission_date', 
    'LDR / EDR / TDD': 'end_date', 
    'Age (Years)': 'age', 
    'Education Level': 'education', 
    'Spoken Language': 'spoken_language', 
    'MAS Cat.': 'mas_cat', 
    'Social Service Agency / Volunteer name': 'volunteer', 
    'Contact Details': 'contact_details', 
    'NOK Name': 'nok_name', 
    'Block No.': 'nok_block',
    'Street Name': 'nok_street_name', 
    'Unit No.': 'nok_unit_address', 
    'Postal Code': 'nok_postal_code', 
    'Contact No.': 'nok_contact_no',
})

export const CrsDatabaseColumnNameToKey = new BiStringMap({
    'Case Type': 'case_type',
    'LCM Case': 'is_lcm_case',
    'CRS Name': 'crs_name',
    'RO Name': 'ro_name',
    'Remarks': 'remarks',
    'IPH Rating': 'iph_rating',
    'IPH reasons': 'iph_reasons',
    'MAS Category': 'mas_cat',
    'Prison No': 'prison_no',
    'Name': 'name',
    'NRIC': 'nric',
    'CBP Scheme': 'cbp_scheme',
    'Emplacement Date': 'start_date',
    'TDD (for CBP)': 'end_date',
    'EDR (for MAS)': 'edr_mas',
    'Case Status': 'case_status',
    'For Model': 'for_model',
    'Cat': 'cat',
    'HWH': 'hwh_location',
    'CBP Duration': 'cbp_duration',
    'MAS Duration': 'mas_duration',
    'Bin': 'bin',
    'DRC Timer': 'drc_timer',
    'Current Age': 'age',
    'Gender': 'gender',
    'Spoken Language': 'spoken_language',
    'Educational Level': 'education',
    'Medical Records': 'medical_status',
    'Incare CRS': 'incare_crs',
    'Sexual': 'sexual_alert',
    'Violent': 'violent_alert',
    'NOK Name': 'nok_name',
    'NOK Relationship': 'nok_relationship',
    'NOK Blk Street Name': 'nok_block_street_address',
    'NOK Level Unit': 'nok_unit_address',
    'NOK Postal Code': 'nok_postal_code',
    'NOK Contact': 'nok_contact_no',
    'Inmate Street Name': 'inmate_street_address',
    'Inmate Postal Code': 'inmate_postal_code',
})

export function checkEmplacementDataColumns( dataTableName: "CrsDatabase" | "EmplacementList") {
    var expectedHeaders: IterableIterator<string> = dataTableName === "CrsDatabase" ?
        CrsDatabaseColumnNameToKey.keys()
    :
        EmplacementListColumnNameToKey.keys()
    return function(headers: string[]) {
        for (let header of expectedHeaders) {
            if (!headers.includes(header)) {
                throw Error(`Missing header: ${header}`)
            }
        }
        return true
    }
}

export const InterimSupsColumnNameToKey = new BiStringMap({
    'name' : "Name",
    'gender' : "Gender",
    'iph_rating' : "IPH Rating",
    'cat' : "Cat",
    'cbp_duration' : "CBP Duration",
    'cbp_scheme' : "CBP Scheme",
    'end_date' : "End Date",
    'hwh_location' : "HWH Location",
    'spoken_language' : "Spoken Language",
})

export const InterimCrsColumnNameToKey = new BiStringMap({
    'crs_name' : "Name",
    'old_caseload' : 'Old Caseload',
    'is_leaving' : "Is Leaving",
    'no_new_cases' : "On Hiatus",
})

export const SupsResultsColumnNameToKey = new BiStringMap({
    'name' : "Name",
    'is_lcm_case': "Is LCM",
    'gender' : "Gender",
    'iph_rating' : "IPH Rating",
    'cat' : "Cat",
    'cbp_duration' : "CBP Duration",
    'cbp_scheme' : "CBP Scheme",
    'end_date' : "End Date",
    'hwh_location' : "HWH Location",
    'spoken_language' : "Spoken Language",
})

export const CrsResultsColumnNameToKey = new BiStringMap({
    'crs_name' : "Name",
    'old_caseload' : 'Old Caseload',
    'num_new_cases' : 'No. New Cases',
    'new_caseload' : 'New Caseload',
    'is_leaving' : "Is Leaving",
    'no_new_cases' : "On Hiatus",
})