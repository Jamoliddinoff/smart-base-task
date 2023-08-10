import React from 'react';
import Container from "../Container";
import { YMaps, Map, Placemark, FullscreenControl, TypeSelector, ZoomControl } from 'react-yandex-maps';
import styled from "styled-components";
import Text from "../Text";
import {useTranslation} from "react-i18next";
import useScreenSize from "../../hooks/useScreenSize";

const CountryInMap = ({country}) => {
    const {t} = useTranslation();
    const {width} = useScreenSize();
    return (
        <Container>
            <div className={'justify-center'}>
                <Text size={width > 700 ? 32 : 20} weight={600} color={'#000'}>{t("mapTitle")}</Text>
            </div>
            <YMaps query={{ apikey: '0cc32749-ed90-4958-bde7-69d38b459f7b' }}>
                <MapWrapper>
                    <Map
                        width={'100%'}
                        height={400}
                        defaultState={{ center: [country.address.latitude, country.address.longitude], zoom: 11 }}
                    >
                        <Placemark
                            modules={['geoObject.addon.balloon']}
                            geometry={[country.address.latitude, country.address.longitude]}
                            properties={{
                                balloonContentBody:
                                    ` <img width="200" src=${country.mainPic} alt="picture"/>
                                      <p>${country.capital}</p>
                                    `
                            }}
                        />
                        <FullscreenControl />
                        <TypeSelector options={{ float: 'left' }} />
                        <ZoomControl options={{ float: 'right' }} />
                    </Map>
                </MapWrapper>
            </YMaps>
        </Container>
    );
};
const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  margin: 20px 0px;
  overflow: hidden;
  position: relative;
  .ymaps-2-1-79-map{
    &:nth-child(1){
      position: absolute;
      top:-0px
    }
  }
`;

export default CountryInMap;
