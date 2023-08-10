import React, {useEffect, useState} from 'react';
import {ArrowWrapper, CloseWrapper, FullModeWrapper, ImageContainer} from "./style";
import ArrowIcon from '../../assets/icons/arrow.png'
import CloseIcon from '../../assets/icons/close.png'

const FullMode = ({show,handlePicture,closeMode,images}) => {
    const [image,setImage] = useState(handlePicture)

    useEffect(()=>{
        setImage(handlePicture)
    },[handlePicture])

    const handleLeftArrow = () =>{
        const index = images.findIndex(item => item.id === image.id);
        images[index-1] && setImage(images[index-1]);
        if(index === 0) {
            setImage(images[images.length - 1])
        }
    }
    const handleRightArrow = () =>{
        const index = images.findIndex(item => item.id === image.id);
        images[index+1] && setImage(images[index+1]);
        if(index === images.length - 1) {
            setImage(images[0])
        }
    }
    return ( show ?
            <FullModeWrapper>
                <ArrowWrapper onClick={handleLeftArrow} style={{marginLeft:30}}>
                    <img src={ArrowIcon} alt={'arrow'}/>
                </ArrowWrapper>
                <ImageContainer>
                    <img src={image?.img} alt={image?.name}/>
                </ImageContainer>
                <ArrowWrapper style={{transform:'rotate(180deg)'}} onClick={handleRightArrow}>
                    <img src={ArrowIcon} alt={'arrow'}/>
                </ArrowWrapper>
                <CloseWrapper onClick={()=>closeMode(false)}>
                    <img src={CloseIcon} alt={'close'}/>
                </CloseWrapper>
            </FullModeWrapper>
            :null
    );
};

export default FullMode;
