import { ThemeProvider } from "next-themes";
import { AppProvider } from "../components/context";
import PageLayout from "../components/layout/PageLayout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AppProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

export default MyApp;
