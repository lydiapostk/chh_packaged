import { BiStringMap } from "@/utils/bistring-map"

export const LanguagesColumnNameToKey = new BiStringMap({
    'language' : "Language",
    'short_form' : "Short form",
})

export type LanguageType = {
    'language': string,
    'short_form': string,
}

export const LocationsColumnNameToKey = new BiStringMap({
    'location' : "Location",
})

export type LocationType = {
    'location': string,
}