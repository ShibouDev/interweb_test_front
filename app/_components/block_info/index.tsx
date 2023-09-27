import { Skelet } from "../common/skeleton";
import * as Styled from "./styled";

type TBlockInfoProps = {
  load?: boolean;
  date: string;
  countImages: number;
};

export const BlockInfo = ({
  load = true,
  date,
  countImages,
}: TBlockInfoProps) => {
  if (!load) {
    return <Skelet width={214} height={29} />;
  }
  return (
    <Styled.Info>
      <h1>{date}</h1>
      <span>
        <h3>{countImages}</h3>
      </span>
    </Styled.Info>
  );
};
