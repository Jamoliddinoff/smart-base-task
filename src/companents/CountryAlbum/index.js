import React, {useState} from 'react';
import Container from "../Container";
import Text from "../Text";
import {CardItem, CardWrapper} from './style'
import {useTranslation} from "react-i18next";
import useScreenSize from "../../hooks/useScreenSize";
import FullMode from "./FullMode";

const CountryAlbum = ({images}) => {
    const {t} = useTranslation();
    const {width} = useScreenSize();
    const [fullMode, setFullMode] = useState(false);
    const [handlePicture, setHandlePicture] = useState();


    return (
        <>
            <Container>
                <div  className={'justify-center'} style={{marginTop:30}}>
                    <Text size={width > 700 ? 32 : 20} weight={600} color={'#000'}>{t("topPlaces")}</Text>
                </div>
                <CardWrapper>
                    {
                        (images||[]).map(item=>(
                            <CardItem key={item.id} onClick={()=>{
                                setHandlePicture(item);
                                setFullMode(true);
                            }}>
                                <img src={item.img} alt={item.name}/>
                                <div>
                                    <Text size={24} color={'#fff'} weight={'600'}>{item.name}</Text>
                                </div>
                            </CardItem>
                        ))
                    }
                </CardWrapper>
            </Container>
            <FullMode
                show={fullMode}
                handlePicture={handlePicture}
                images={images}
                closeMode={setFullMode}
            />
        </>

    );
};



export default CountryAlbum;
