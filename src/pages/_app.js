import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";

// Prevent auto-adding the CSS from FontAwesome
config.autoAddCss = false;

// Add icons to the library
library.add(fas, far, fab);

export default function App({ Component, pageProps }) {
  // Set up a state to track whether the app is hydrated (running on the client)
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set isHydrated to true after the component has mounted
    setIsHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      {/* Render the content only once the app is hydrated */}
      {isHydrated ? (
        <Component {...pageProps} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
