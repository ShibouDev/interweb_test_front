"use client";
import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 0 25px 0;
  border-bottom: 1px solid var(--Gray-200);
`;

export const LogoAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  & > p {
    color: var(--Gray-500);
    font-weight: 400;
    font-size: 12.5px;
    line-height: 125%;
    letter-spacing: -0.375;
  }
  & > img {
    cursor: pointer;
  }
`;
