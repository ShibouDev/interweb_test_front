import { BlockInfo } from "../_components/block_info";
import { Wrapper } from "../_components/common/container";
import { Header } from "../_components/common/header";
import * as Styled from "../_components/home/styled";
import { ImageBlock } from "../_components/image";

export default function Loading() {
  return (
    <>
      <Wrapper>
        <Header load={false} countImages={12} />
        <Styled.Content>
          <BlockInfo load={false} date={"August ‘23"} countImages={6} />
          <Styled.ImageContainer>
            <ImageBlock load={false} widthSkeleton={335}/>
            <ImageBlock load={false} widthSkeleton={335}/>
            <ImageBlock load={false} widthSkeleton={213}/>
            <ImageBlock load={false} widthSkeleton={335}/>
            <ImageBlock load={false} widthSkeleton={213}/>
          </Styled.ImageContainer>
        </Styled.Content>
      </Wrapper>
    </>
  );
}
