import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 25px;
`;

export const CardItem = styled.div`
  position: relative;
  width: 34%;
  height: 334px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
  cursor: pointer;
  
  &:nth-child(1){
    width: 64%;
  }
  &:nth-child(4){
    width: 64%;
  }
  &:nth-child(5){
    width: 64%;
  }&:nth-child(8){
    width: 64%;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div{
    position: absolute;
    bottom: 25px;
    left: 30px;
  }

  @media (max-width: 700px) {
    width: 100%;
    &:nth-child(n){
      width: 100%;

    }
  }
`;

export const FullModeWrapper = styled.div`
  position: fixed;
  lef:0px;
  top:0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  z-index: 99999;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ArrowWrapper = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(79, 79, 79, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CloseWrapper = styled.span`
  position: absolute;
  top:50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(79, 79, 79, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

