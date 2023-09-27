"use client";
import styled from "styled-components";

export const EditLabel = styled.div`
  z-index: 4;
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
`;

export const Header = styled.div`
  display: flex;
  padding: 50px 0 0 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  gap: 40px;
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

export const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 13px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > img {
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const SetCustomLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > input {
    color: var(--Purple-800);
    text-align: center;
    font-size: 18px;
    border: none;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: -0.54px;
    outline: none;
    background: transparent;

  }
  & > p {
    color: var(--Gray-500);
    text-align: center;
    font-size: 12.5px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: -0.375px;
  }
`;
