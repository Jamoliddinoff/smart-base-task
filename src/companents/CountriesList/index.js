import React from 'react';
import Container from "../Container";
import Text from "../Text";
import Button from "../Button";
import {TitleWrapper} from "../AboutCountry/style";
import {CardItem, CardsWrapper, DescriptionItem, ImageWrapper} from "./style";
import {ReactComponent as EarthBlue} from "../../assets/icons/earth-blue-icon.svg";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import useScreenSize from "../../hooks/useScreenSize";

const CountriesList = () => {
    const countries = useSelector(store => store?.lang?.countries);
    const {t} =useTranslation();
    const {width} = useScreenSize();

    console.log('countries---------',countries,useSelector(store=>store));
    return (
        <Container>
            <TitleWrapper style={{marginBottom:24}}>
                <Text size={width > 700 ? 32 : 20} color={'#000'} weight={'600'}>
                    {t('countriesTitle')}
                </Text>
            </TitleWrapper>
            <CardsWrapper>
                {(countries||[]).map(item=>(
                    <CardItem key={item.id}>
                        <ImageWrapper><img  alt={item.capital} src={item.mainPic} title={'Image'}/></ImageWrapper>
                        <div  className={'justify-between'} style={{margin:'25px 0px'}}>
                            <DescriptionItem>
                                <EarthBlue/>
                                <Text size={width > 400 ? 20 : 16} color={'#000'} weight={'600'}>
                                    {item.country}
                                </Text>
                            </DescriptionItem>
                            <Text style={{margin:0}}>{item.capital}</Text>
                        </div>
                        <Link to={`/country/${item.id}`}>
                            <Button style={{width:'100%',padding:"10px 50px"}}>{t("viewBtn")}</Button>
                        </Link>
                    </CardItem>
                ))}


            </CardsWrapper>

        </Container>
    );
};

export default CountriesList;
