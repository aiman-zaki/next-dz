import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/commons/Layout";
import { MantineProvider } from "@mantine/core";

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <MantineProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </SessionProvider>
  );
}

export default App;
