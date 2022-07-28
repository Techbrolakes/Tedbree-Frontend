import { Typography } from "antd";
import Logo from "../../common/components/LogoImage";
import SiteImage from "../../common/components/SiteImage";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const AdminAuthLayout: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <main className="auth-bg px-12 py-4">
      <Logo />
      <div className="flex items-center-justify-center">
        <section className="max-w-2xl">
          <Typography.Title className="!text-white !text-5xl !font-bold">
            Find the best candidates for your organisation.
          </Typography.Title>
          <SiteImage
            src="/images/auth-image.png"
            alt="auth-image"
            width={600}
            preview={false}
          />
        </section>

        <section>{children}</section>
      </div>
    </main>
  );
};

export default AdminAuthLayout;
