import Image, { type ImageProps } from "next/image";

import serverImageLoader from "@/app/utils/serverImageLoader";

export const CustomImage = (props: Omit<ImageProps, "loader">) => {
  //@ts-ignore
  return <Image loader={serverImageLoader} {...props} alt="" />;
};
