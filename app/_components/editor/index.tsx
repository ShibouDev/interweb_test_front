"use client";
import Image from "next/image";
import { useState } from "react";

import { Button } from "../common/button";
import * as Styled from "./styled";

export const DropZone = () => {
  const [dragging, setDragging] = useState(false);
  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };
  //   const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
  //     event.preventDefault();
  //     setDragging(false);
  //   };
  return (
    <Styled.DropZone
      dragging={dragging}
      onDragEnter={handleDragEnter}
      //   onDragLeave={handleDragLeave}
    >
      <Styled.Content>
        <Styled.Tooltips>
          <Button icon="/svg/close.svg" onClick={() => setDragging(false)}>
            Close editor
          </Button>
        </Styled.Tooltips>
        <Styled.InfoContainer>
          <Image
            src={"/svg/upload-drag-and-drop.svg"}
            width={80}
            height={65}
            alt="upload"
          />
          <h1>Upload file</h1>
          <p>Drop your file here to start uploading</p>
        </Styled.InfoContainer>
      </Styled.Content>
    </Styled.DropZone>
  );
};
