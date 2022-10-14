import Layout from "@/components/Layout";
import { CartContext } from "@/utils/CartContext";
import type { AppProps } from "next/app";
import "../css/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  );
}

export default MyApp;
