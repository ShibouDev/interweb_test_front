"use client";
import { Images } from "@/app/_lib/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../../common/button";
import { Wrapper } from "../../common/container";
import { CustomImage } from "../../common/customImage";
import * as Styled from "./styled";
export const EditLabelModal = () => {
  const searchParams = useSearchParams();
  const editParams = searchParams.get("edit");
  const idParams = searchParams.get("id");
  const imageParams = searchParams.get("image");
  const labelParams = searchParams.get("label");

  const [label, setLabel] = useState<string | null>(labelParams);
  const router = useRouter();
  const hundleClose = () => {
    router.push("/");
  };
  useEffect(() => {
    setLabel(labelParams);
  }, [searchParams]);

  const hundleSave = async () => {
    try {
      if (label) {
        const data = await Images.editLabel({
          id: Number(idParams),
          label,
        });
        if (data) {
          router.replace("/");
          router.refresh()
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (editParams == "true" && imageParams && labelParams) {
    return (
      <Styled.EditLabel>
        <Wrapper>
          <Styled.Header>
            <Button icon={"/svg/close.svg"} onClick={hundleClose}>
              Close editor
            </Button>
          </Styled.Header>
          <Styled.InfoContainer>
            <h1>Set custom label</h1>
            <Styled.ImageInfo>
              <CustomImage
                src={imageParams}
                width={335}
                height={200}
                alt="img"
              />
              <Styled.SetCustomLabel>
                <input
                  value={label ? label : ''}
                  onChange={(e) => setLabel(e.target.value)}
                />
                <p>100 chars max</p>
              </Styled.SetCustomLabel>
            </Styled.ImageInfo>
            <Button icon={"/svg/save.svg"} onClick={hundleSave}>
              Save
            </Button>
          </Styled.InfoContainer>
        </Wrapper>
      </Styled.EditLabel>
    );
  }
};
