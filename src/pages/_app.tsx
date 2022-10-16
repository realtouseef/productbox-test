import Layout from "@/components/Layout";
import { ShoppingCardProvider } from "@/utils/ShoppingCartContext";
import type { AppProps } from "next/app";
import "../css/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCardProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCardProvider>
  );
}

export default MyApp;
