"use client";
import { ReactNode } from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1412px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};
