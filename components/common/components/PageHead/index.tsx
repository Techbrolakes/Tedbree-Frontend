import React from "react";
import Head from "next/head";
import constants from "../../constants";

const { APP_NAME, PAGE_HEAD } = constants;

interface IProps {
  title: string;
  desc?: string;
  keywords?: string;
}

const PageHead: React.FC<IProps> = ({ title, desc, keywords }: IProps) => {
  return (
    <Head>
      <title> {`${APP_NAME} | ${title}`}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

PageHead.defaultProps = {
  desc: PAGE_HEAD.description,
  keywords: PAGE_HEAD.keyword,
};
export default PageHead;
