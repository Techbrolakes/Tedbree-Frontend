import React from "react";
import { Image } from "antd";

interface IProps {
  src: string;
  alt: string;
  width: string | number;
  className?: string;
  preview: boolean;
}

const SiteImage: React.FC<IProps> = ({
  src,
  alt,
  width,
  className,
  preview,
}: IProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={+width}
      className={className}
      preview={preview}
    />
  );
};

export default SiteImage;
