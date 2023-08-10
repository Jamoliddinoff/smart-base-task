import React from 'react';
import CountryAlbum from "../companents/CountryAlbum";
import Banner from "../companents/Banner";
import AboutCountry from "../companents/AboutCountry";
import ViewVideo from "../companents/ViewVideo";
import CountryInMap from "../companents/CountrInMap";
import Widget from "../companents/Widget";
import { useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const CountryItem = () => {
    const params = useParams();
    const countries = useSelector(store => store.lang.countries);

    const country = countries[params?.id-1]
    return (
        <>
            <Banner background={country?.mainPic} country={country.country} description={country.description}/>
            <Widget country={country}/>
            <AboutCountry country={country}/>
            <CountryAlbum images={country.topPhotos}/>
            <ViewVideo url={country?.video}/>
            <CountryInMap country={country}/>
        </>
    );
};

export default CountryItem;
