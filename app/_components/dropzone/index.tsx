"use client";
import { Images } from "@/app/_lib/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import * as Styled from "./styled";

export const DropZone = ({showDropZone}: {showDropZone: (value: boolean) => void}) => {
  const [dragging, setDragging] = useState(false);
  const router = useRouter();
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    showDropZone(false)
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    showDropZone(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const formData = new FormData();
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        formData.append("image", e.dataTransfer.files[i]);
      }
      const data = await Images.uploadImages(formData);
      if (data) {
        router.refresh();
      }
    }
  };
  return (
    <Styled.DropZone
      dragging={dragging}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={onDragOver}
      onDrop={handleDrop}
    >
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
    </Styled.DropZone>
  );
};
