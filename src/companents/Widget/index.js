import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Text from "../Text";
import axios from "axios";
import {useTranslation} from "react-i18next";

const Widget = ({country}) => {
    const [weather,setWeather] = useState({});
    const [currency,setCurrency] = useState({});
    const [time, setTime] = useState('');
    const {t} = useTranslation();


    useEffect(()=>{
        getWeather();
        getCurrency();
    },[])

    useEffect(()=>{
        const timer = setInterval(() => tick() ,1000 )
        return function clean () {
            clearInterval(timer)
        }
    })

    const getWeather = async () => {
        try{
            const response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json',{
                params: {
                    q: `${country.address.latitude},${country.address.longitude}`
                },
                headers: {
                    'X-RapidAPI-Key': '531aa0cbebmsh5e67f99de7c4b55p107bf2jsnf3bd10e3c15e',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            })
            setWeather(response?.data?.current)
        } catch (err) {
            console.warn(err)
        }
    }

    const getCurrency = async () => {
        try{
            const response = await axios.get('https://api.currencyapi.com/v3/latest',{
               params:{
                   apikey: 'cur_live_An6p5r8gmh6S0UmmO4elKqlPzoWwdECiGTcXUf6j',
                   currencies:'USD,EUR,RUB',
                   base_currency:country.currency.shorCut
               }
            })
            setCurrency(response?.data?.data)
        } catch (err) {
            console.warn(err)
        }
    }

    const formatTime = (input) => {
        if(input < 10) {
            return '0';
        }
        else return '';
    }

    const tick = () => {
        const date = new Date(new Date().toLocaleString('en', {timeZone: country.timeZone}));
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        setTime(formatTime(hour)+hour+":"+formatTime(minutes)+minutes+':'+formatTime(seconds)+seconds)
    }

    return (
        <Wrapper>
            <div className={'justify-between'}>
                <Text size={18} color={'#fff'}>🕓  {t('timeTitle')}:</Text>
                <Text size={14} color={'#fff'}>{time} </Text>
            </div><div className={'justify-between'}>
                <Text size={18} color={'#fff'}>🌤 {t("weatherTitle")}:</Text>
                <Text size={14} color={'#fff'}>{weather?.temp_c||t("notFoundTitle")} C </Text>
            </div>
            <div className={'justify-between'}>
                <Text size={16} color={'#fff'}>💰 1 {country.currency.shorCut}:</Text>
                <Text size={14} color={'#fff'}>{currency?.USD?.value||t("notFoundTitle")} USD</Text>
            </div>
            <div className={'justify-between'}>
                <Text size={16} color={'#fff'}>💰 1 {country.currency.shorCut}:</Text>
                <Text size={14} color={'#fff'}>{currency?.EUR?.value||t("notFoundTitle")} EUR</Text>
            </div>
            <div className={'justify-between'}>
                <Text size={16} color={'#fff'}>💰 1 {country.currency.shorCut}:</Text>
                <Text size={14} color={'#fff'}>{currency?.RUB?.value||t("notFoundTitle")} RUB</Text>
            </div>

        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 280px;
  padding: 14px;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top:100px;
  left: 20px;
  border-radius: 12px;
  display: flex;
  //align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 550px) {
    width: auto;
    margin: 16px 12px 0px 12px;
    position:inherit;
  }
`;

export default Widget;
