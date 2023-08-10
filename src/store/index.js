import { configureStore } from '@reduxjs/toolkit'
import language from "./languageSlice";

export const store = configureStore({
    reducer: {
        lang: language
    },
})
