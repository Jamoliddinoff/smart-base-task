import React from 'react';
import Container from "../Container";
import Text from "../Text";
import {ItemWrapper, TitleWrapper} from "./style";
import {useTranslation} from "react-i18next";
import useScreenSize from "../../hooks/useScreenSize";

const AboutCountry = ({country}) => {
    const {t} = useTranslation();
    const {width} = useScreenSize();
    return (
        <Container>
            <TitleWrapper>
                <Text size={width > 700 ? 32 : 20} color={'#000'} weight={'600'}>
                    {t("aboutCountry")}
                </Text>
            </TitleWrapper>
            <div className={'justify-between'} style={{alignItems:'flex-start'}}>
                <ItemWrapper>
                    <div>
                        <span>{country.flag}</span>
                    </div>
                    <Text size={width > 500 ? 20 : 16} color={'#000'} weight={'600'}>{t("country")}</Text>
                    <Text size={width > 500 ? 16 : 14}>{country.country}</Text>
                </ItemWrapper>
                <ItemWrapper>
                    <div>
                        <span>🏢</span>
                    </div>
                    <Text size={width > 500 ? 20 : 16} color={'#000'} weight={'600'}>{t("theCapital")}</Text>
                    <Text size={width > 500 ? 16 : 14}>{country.capital}</Text>
                </ItemWrapper>
                <ItemWrapper>
                    <div>
                        <span>🫰</span>
                    </div>
                    <Text size={width > 500 ? 20 : 16} color={'#000'} weight={'600'}>{t("currencyTitle")}</Text>
                    <Text size={width > 500 ? 16 : 14}>{country.currency.name}</Text>
                </ItemWrapper>
            </div>
        </Container>
    );
};

export default AboutCountry;
