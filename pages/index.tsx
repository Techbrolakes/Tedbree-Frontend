import type { NextPage } from "next";
import AdminAuthLayout from "../components/layouts/AdminAuthLayout";
import PageHead from "../components/common/components/PageHead";
import LoginSection from "../components/pageComponents/login/LoginSection";

const Home: NextPage = () => {
  return (
    <>
      <PageHead title="login" />
      <AdminAuthLayout>
        <LoginSection />
      </AdminAuthLayout>
    </>
  );
};

export default Home;
