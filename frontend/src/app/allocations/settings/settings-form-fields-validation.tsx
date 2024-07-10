'use client'
import { LanguageType } from "../settings-data";

interface ValidateAddLanguageFieldsProp {
    language: LanguageType;
    languages: LanguageType[];
}

export function validateAddLanguageFields ({language, languages}: ValidateAddLanguageFieldsProp): boolean {
    return language.language !== "" && (!languages.map(oldLanguage=>oldLanguage.language).includes(language.language)) 
        && language.short_form !== "" && (!languages.map(oldLanguage=>oldLanguage.short_form).includes(language.short_form)) 
}

export function validateAddLanguageLanguageField ({language, languages}: ValidateAddLanguageFieldsProp): boolean {
    return language.language !== "" && (!languages.map(oldLanguage=>oldLanguage.language).includes(language.language))
}

export function validateAddLanguageShortFormField ({language, languages}: ValidateAddLanguageFieldsProp): boolean {
    return language.short_form !== "" && (!languages.map(oldLanguage=>oldLanguage.short_form).includes(language.short_form)) 
}