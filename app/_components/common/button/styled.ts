"use client";
import styled from "styled-components";
export const Button = styled.button<{ width?: number; height?: number }>`
  display: flex;
  padding: 15px 20px 15px 15px;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: var(--Purple-800);
  max-width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  max-height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  background-color: var(--Gray-200);
  cursor: pointer;
  border: none;
  &:disabled {
    color: var(--Gray-500);
    cursor: not-allowed;
  }
  & > label {
  cursor: pointer;
    & > input {
      display: none;
    }
  }
`;
