import type { NextPage } from "next";
import Head from "next/head";
import { Button, Typography, Input } from "antd";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography.Title className="text-7xl">
          GETTING STARTED WITH TYPESCRIPT
        </Typography.Title>
        <Input placeholder="Enter Name Boss" />
        <Button type="primary">Submit</Button>
      </main>
    </div>
  );
};

export default Home;
