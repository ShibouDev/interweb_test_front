"use client";
import { Images } from "@/app/_lib/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../button";
import { Skelet } from "../skeleton";
import * as Styled from "./styled";

export type THeaderProps = {
  load?: boolean;
  countImages: number;
};

export const Header = ({ load = true, countImages }: THeaderProps) => {
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
    <Styled.Container>
      <Styled.LogoAndDescription>
        <Image
          src={"/svg/logo.svg"}
          width={182}
          height={25}
          alt="logo"
          onClick={() => router.push("/")}
        />
        {!load ? (
          <Skelet width={138} height={15} />
        ) : (
          <p>{countImages} images stored in keeper</p>
        )}
      </Styled.LogoAndDescription>
      <Button
        icon={"/svg/upload.svg"}
        disabled={!load}
        isUpload
        onChange={(e) => handleChange(e)}
      >
        Upload image
      </Button>
    </Styled.Container>
  );
};
