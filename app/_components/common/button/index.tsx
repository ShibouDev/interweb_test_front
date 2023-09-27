import Image from "next/image";
import * as Styled from "./styled";
type TButtonProps = {
  onClick?: () => void;
  onChange?: (e: any) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: string;
  width?: number;
  height?: number;
  isUpload?: boolean;
};

export const Button = ({
  onClick,
  onChange,
  children,
  disabled,
  icon,
  width,
  height,
  isUpload,
}: TButtonProps) => {
  return (
    <Styled.Button
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
    >
      {icon && <Image src={icon} alt={""} width={24} height={24} />}
      {isUpload && onChange ? (
        <label>
          <input type="file" multiple onChange={onChange} name="images"/>
          {children}
        </label>
      ) : (
        children
      )}
    </Styled.Button>
  );
};
