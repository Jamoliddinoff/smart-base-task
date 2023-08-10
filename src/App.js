import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from "./companents/AppLayout";
import Theme from "./assets/theme";
import Home from "./screens/Home";
import CountryItem from "./screens/CountryItem";
import './App.css';
import ScrollToTop from "./companents/ScrollToTop";
import React from "react";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import './i18n'

function App() {

    return (
    <Theme>
        <I18nextProvider i18n={i18next}>

                <Router>
                    <AppLayout>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/country/:id" element={<CountryItem/>} />
                    </Routes>
                    <ScrollToTop/>
                    </AppLayout>
                </Router>

        </I18nextProvider>
    </Theme>
  );
}


export default App;
