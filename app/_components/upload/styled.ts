"use client";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  gap: 60px;
  align-items: center;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const TitileAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  max-width: 400px;
  & > h1 {
    color: var(--Gray-900);
    font-size: 31.104px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: -0.933px;
  }
  & > p {
    color: var(--Gray-500);
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: -0.45px;
  }
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  & > img{
    border-radius: 10px;
    object-fit: cover;
  }
`;


export const ButtonsContainer = styled.div`
display: flex;
gap: 15px;
`
