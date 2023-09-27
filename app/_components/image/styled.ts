"use client";
import styled from "styled-components";

export const ImageContent = styled.div<{ processing: boolean }>`
  position: relative;
  max-width: 335px;
  max-height: 213px;
  & > img {
    display: block;
    border-radius: 10px;
    object-fit: cover;
  }
  & > span {
    position: absolute;
    top: -10px;
    background-color: var(--Yellow);
    right: 10px;
    display: flex;
    border-radius: 5px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    max-width: 94px;
    z-index: 1;
    & > p {
      color: var(--Gray-900);
      font-size: 12.5px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: -0.375px;
    }
  }
`;

export const UploadFilter = styled.div`
  border-radius: 0px 0px 10px 10px;
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  background: var(--Gray-200);
  width: 200px;
  height: 239px;
  z-index: 2;
`;

export const UploadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  & > h3 {
    color: var(--Gray-900, #393e46);
    font-size: 21.6px;
    font-style: normal;
    font-weight: 600;
    line-height: 110%;
    letter-spacing: -0.648px;
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

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const MenuItem = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  cursor: pointer;
  & > img {
    stroke: #fff;
  }
  & > p {
    color: var(--Yellow, #fcf6b1);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: -0.54px;
  }
`;
