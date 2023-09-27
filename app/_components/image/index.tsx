"use client";
import { Images } from "@/app/_lib/api";
import { download } from "@/app/utils/download";
import { useRouter } from "next/navigation";
import { Skelet } from "../common/skeleton";
import * as Styled from "./styled";

import Image from "next/image";
import { useState } from "react";
import { CustomImage } from "../common/customImage";

interface IImageBlockProps {
  load?: boolean;
  processing?: boolean;
  label?: string;
  filename?: string;
  id?: number;
  widthSkeleton?: number;
}

export const ImageBlock = ({
  load = true,
  processing,
  label,
  filename,
  id,
  widthSkeleton,
}: IImageBlockProps) => {
  const [hover, setHover] = useState(false);
  const [width, setWidth] = useState(335);
  const router = useRouter();
  const hundleModalRoute = () => {
    router.push(`/?edit=true&image=${filename}&id=${id}&label=${label}`);
  };
  const hundleDelete = async () => {
    try {
      await Images.deleteImage(Number(id));
      router.refresh();
    } catch (error) {}
  };
  if (!load) {
    return <Skelet width={widthSkeleton || 335} height={213} />;
  }
  if (load && label && filename) {
    return (
      <Styled.ImageContent
        processing={processing || false}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CustomImage
          src={filename}
          width={width}
          height={213}
          alt=""
          onLoadingComplete={({ naturalWidth, naturalHeight }) => {
            if (naturalWidth < naturalHeight) {
              setWidth(213);
            }
          }}
        />
        {processing && (
          <Styled.UploadFilter>
            <Styled.UploadInfo>
              <h3>Uploading</h3>
              <p>234kb of 315kb</p>
            </Styled.UploadInfo>
          </Styled.UploadFilter>
        )}
        {hover && (
          <Styled.MenuItems>
            <Styled.MenuItem onClick={() => download(filename)}>
              <Image
                src={"/svg/download.svg"}
                width={24}
                height={24}
                alt="download"
              />
              <p>Download</p>
            </Styled.MenuItem>
            <Styled.MenuItem onClick={hundleModalRoute}>
              <Image src={"/svg/edit.svg"} width={24} height={24} alt="edit" />
              <p>Edit label</p>
            </Styled.MenuItem>
            <Styled.MenuItem onClick={hundleDelete}>
              <Image
                src={"/svg/delete.svg"}
                width={24}
                height={24}
                alt="delete"
              />
              <p>Delete</p>
            </Styled.MenuItem>
          </Styled.MenuItems>
        )}
        <span>
          <p>{label}</p>
        </span>
      </Styled.ImageContent>
    );
  }
};
