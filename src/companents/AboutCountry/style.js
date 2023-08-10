import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  //gap: 16px;
  width: 330px;
  text-align: center;
  margin-top: 30px;
  gap: 10px;
  div{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(34, 82, 252, 0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
  }
`;
