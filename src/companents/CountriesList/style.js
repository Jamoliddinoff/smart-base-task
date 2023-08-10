import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardItem = styled.div`
  width: 311px;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: 0px 9px 18px 0px rgba(0, 0, 0, 0.08);
  @media (max-width: 720px) {
    width: 270px;
  }
  @media (max-width: 640px) {
    width: 230px;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DescriptionItem =  styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span{
    width: 24px;
    height: 24px;
  }
`;

