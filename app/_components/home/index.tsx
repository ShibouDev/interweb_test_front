"use client";
import { IGetImages } from "@/app/_lib/api/types";
import { useState } from "react";
import { BlockInfo } from "../block_info";
import { Wrapper } from "../common/container";
import { Header } from "../common/header";
import { DropZone } from "../dropzone";
import { ImageBlock } from "../image";
import { EditLabelModal } from "../modal/edit_label";
import * as Styled from "./styled";
export const Home = ({ data }: { data: IGetImages[] }) => {
  const [showDropZone, setShowDropZone] = useState(false);
  return (
    <Styled.Page
      onDragEnter={() => setShowDropZone(true)}
    >
      <Wrapper>
        <Header countImages={12} />
        <Styled.Content>
          {data.map((obj, i) => (
            <>
              <BlockInfo date={obj.createdAt} countImages={6} key={i} />
              <Styled.ImageContainer>
                {obj.images.map((image) => (
                  <ImageBlock
                    processing={false}
                    label={image.label}
                    id={image.id}
                    key={image.id}
                    filename={image.filename}
                  />
                ))}
              </Styled.ImageContainer>
            </>
          ))}
        </Styled.Content>
      </Wrapper>
      <EditLabelModal />
      {showDropZone && <DropZone showDropZone={setShowDropZone}/>}
    </Styled.Page>
  );
};
