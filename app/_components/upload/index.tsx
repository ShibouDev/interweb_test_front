"use client";

import { Images } from "@/app/_lib/api";
import Image from "next/image";

import { Button } from "@/app/_components/common/button";
import { Wrapper } from "@/app/_components/common/container";
import { useRouter } from "next/navigation";
import * as Styled from "./styled";

export const Upload = () => {
  const router = useRouter();
  const handleChange = async (e: any) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        formData.append("image", e.target.files[i]);
      }
      const data = await Images.uploadImages(formData);
      if (data) {
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <>
      <Wrapper>
        <Styled.Container>
          <Image src={"/svg/logo.svg"} width={182} height={25} alt="logo" />
          <Styled.InfoWrapper>
            <Styled.TitileAndDescription>
              <h1>No images uploaded yet</h1>
              <p>
                Upload your first image by drag and dropping the file on the
                screen or click the button below
              </p>
            </Styled.TitileAndDescription>
            <Styled.ButtonsContainer>
              <Button
                icon={"/svg/upload.svg"}
                isUpload
                onChange={(e) => handleChange(e)}
              >
                Upload image
              </Button>
            </Styled.ButtonsContainer>
          </Styled.InfoWrapper>
        </Styled.Container>
      </Wrapper>
    </>
  );
};
