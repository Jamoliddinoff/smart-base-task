import styled from "styled-components";
import {Link} from "react-router-dom";

export const WrapSelector = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  width: 300px !important;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #808080;
  cursor: pointer;
  @media (max-width: 640px) {
    width: auto !important;
  }
  input {
    outline: none;
    border: none;
    font-size: 14px;

    &.focus {
      border: none;
    }
  }
`;

export const OptionsWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 50px;
  background: #fff;
  box-shadow: 0px 4px 14px #262626;
  border-radius: 8px;
  width: 100%;
  z-index: 100000000 !important;
`;

export const Options = styled.div`
  max-height: 240px;
  transition: 0.3s;
  overflow: auto;
    &::-webkit-scrollbar {
      width: 4px;
      background: #EFF4FA;
    },
    &::-webkit-scrollbar-thumb {
      background-color: ${prop => prop.theme.colors.main};
      border-radius: 10px;
      width: 4px;
    },
`;
export const Item = styled(Link)`
  padding: 12px 5px 12px 16px;
  font-size: 16px;
  height: 100%;
  font-weight: 400;
  font-style: normal;
  cursor: pointer;
  margin-bottom: 0px;
  color:#000;
  border-bottom: 0.5px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
    &:hover {
      background: #EFF4FA;
    }
`;

