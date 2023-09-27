"use client";
import styled from "styled-components";

export const DropZone = styled.div<{ dragging: boolean }>`
  z-index: 3;
  opacity: ${(props) => (props.dragging ? "100%" : 0)};
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1412px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Tooltips = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
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
