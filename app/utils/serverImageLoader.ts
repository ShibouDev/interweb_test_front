export default function serverImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) {
  return `${process.env.NEXT_PUBLIC_SERVER_HOST_IMAGE}/${src}?w=${width}&q=${
    quality || 75
  }`;
}
