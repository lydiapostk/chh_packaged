import { BiStringMap } from "@/utils/bistring-map"
import { GenderType } from "@/data/personal-info"

export type IphStatusType = "Green" | "Amber" | "Red" | "Black"
export const IphStatuses: IphStatusType[] = ["Green", "Amber", "Red", "Black"]

export interface CrsType {
    crs_name : string
    gender : GenderType /* 'M' or 'F' */
    able_to_take_penal : boolean
    able_to_take_non_penal : boolean
    max_iph_status : IphStatusType
    max_new_caseload : number
    max_overall_caseload : number
    hwh_locations : string
    spoken_languages : string
    is_ground_crs : boolean
    is_lcm : boolean
    is_active : boolean
};

export const CrsColumnNameToKey = new BiStringMap({
    'crs_name' : "Name",
    'gender' : "Gender",
    'able_to_take_penal' : "Able to take penal",
    'able_to_take_non_penal' : "Able to take non-penal",
    'max_iph_status' : "Max IPH status",
    'max_new_caseload' : "Max new monthly caseload",
    'max_overall_caseload' : "Max overall caseload",
    'hwh_locations' : "HWH locations",
    'spoken_languages' : "Spoken languages",
    "is_ground_crs": "Is ground officer",
    "is_lcm": "Is on LCM trial",
    "is_active": "Is an active officer",
})

export const CrsDataStringArrayParse = (strArray: string) =>  {
    return strArray == "" ? [] : strArray.split(', ')
}

export const CrsDataArrayStringify = (strArray: Array<string>) =>  {
    return strArray.join(", ")
}