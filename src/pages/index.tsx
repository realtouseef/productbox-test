import Products from "@/components/Products";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RandoStore</title>
      </Head>

      <Products />
    </>
  );
};

export default Home;
