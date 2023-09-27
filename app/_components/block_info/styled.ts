"use client";
import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  gap: 15px;
  & > h1 {
    color: var(--Gray-200);
    font-size: 31.104px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: -0.933px;
  }
  & > span {
    display: flex;
    padding: 5px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: var(--Green);
    & > h3 {
      color: #fff;
      text-align: right;
      font-size: 21.6px;
      font-style: normal;
      font-weight: 600;
      line-height: 110%;
      letter-spacing: -0.648px;
    }
  }
`;
