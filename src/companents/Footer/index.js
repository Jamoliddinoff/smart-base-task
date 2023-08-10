import React from 'react';
import styled from "styled-components";
import Text from "../Text";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import gitIcon from '../../assets/icons/git.png'
const Footer = () => {
    return (
        <Wrapper>
            <BodyWrapper>
                <LogoWrapper>
                    <Logo/>
                </LogoWrapper>
                <TextWrapper>
                    <Text>@Smart-base barcha huquqlar himoyalangan 2023-yil</Text>
                </TextWrapper>
                <GitWrapper href="https://github.com/Jamoliddinoff/smart-base-task" target="_blank">
                    <img src={gitIcon} alt={'git'}/>
                    <Text>Git: Botir_bek</Text>
                </GitWrapper>
            </BodyWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
  height: 82px;
  width: calc(100% - 24px);
  background: #1C1F29;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
  @media (max-width: 1080px) {
    height: auto;
  }
`;
const LogoWrapper= styled.div`
  svg{
    height: 45px;
    fill: #fefefe;
  }
  @media (max-width: 480px) {
    svg {
      height: 35px;
    }
  }
  @media (max-width: 400px) {
    svg {
      height: 30px;
    }
  }
`;
const BodyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1080px;
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 20px 0px;
    gap: 16px;
  }
`;
const TextWrapper = styled.div`
  width: 100%;
  p{
    text-align: center;
  }
`;

const GitWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  p {
    width:100px;

  }
  img {
    width: 24px;
    height: 24px;
    
  }
`;


export default Footer;
