import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type TSkeletonProps = {
  width: number;
  height: number;
};

export const Skelet = ({ width, height }: TSkeletonProps) => {
  return <Skeleton width={width} height={height} />;
};
