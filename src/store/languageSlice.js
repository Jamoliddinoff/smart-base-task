import { createSlice } from '@reduxjs/toolkit'
import {countries, countriesEn, countriesRu} from "../mocData";

const getLang = JSON.parse(localStorage.getItem('lang'));
const getDefaultCountries = () => {
    if (getLang === "uz"){
        return countries
    }
    if (getLang === "ru"){
        return countriesRu
    }
    if (getLang === "en"){
        return countriesEn
    }
}
const initialState = {
    lang: getLang ||'uz',
    countries: getDefaultCountries()
}

export const languageSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state,action) => {
            state.lang = action.payload
            if (action.payload === 'uz'){
                state.countries = countries
            }
            if (action.payload === 'en'){
                state.countries = countriesEn
            }
            if (action.payload === 'ru'){
                state.countries = countriesRu
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setLang } = languageSlice.actions

export default languageSlice.reducer
