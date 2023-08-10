import React from 'react';
import styled from "styled-components";
import banner from '../../assets/images/Banner.jpg'
import Text from "../Text";
import {useTranslation} from "react-i18next";
import useScreenSize from "../../hooks/useScreenSize";

const Banner = ({background,country,description}) => {
    const { t } = useTranslation();
    const {width} = useScreenSize()

    return (
        <BannerWrapper background={background?background:banner}>
            <div>
                <Text size={width > 830 ? 60 : width > 400 ? 50 :30} color={'#fff'} weight={width>900?'900':'auto'}>
                    {country?country:t('discover')}
                </Text>
                <Text size={width > 400 ? 20 : 14} color={'#fff'} >
                    {description
                        ? description
                        : t('lorem')
                    }
                </Text>
            </div>
        </BannerWrapper>
    );
};

const BannerWrapper = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${props => props.background});
  background-size: 100% 600px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0,0,0,0.8);
  @media (max-width: 550px) {
    height: 400px;
  }
  @media (max-width: 480px) {
    height: 360px;
  }
  @media (max-width: 400px) {
    height: 300px;
  }
  div{
    //margin-top: 114px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    width: 875px;
    @media (max-width: 830px) {
      width: 100%;
    }
    p{
      text-align: center;
    }
  }
`;

export default Banner;
