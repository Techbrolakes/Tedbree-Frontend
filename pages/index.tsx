import type { NextPage } from "next";
import AdminAuthLayout from "../components/layouts/AdminAuthLayout";
import PageHead from "../components/common/components/PageHead";
import LoginSection from "../components/pageComponents/login/LoginSection";
import constants from "../components/pageComponents/login/constants";

const { PAGE_HEAD } = constants;

const Home: NextPage = () => {
  return (
    <>
      <PageHead title={PAGE_HEAD.title} />
      <AdminAuthLayout>
        <LoginSection />
      </AdminAuthLayout>
    </>
  );
};

export default Home;
