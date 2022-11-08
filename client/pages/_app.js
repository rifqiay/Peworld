import "bootstrap/dist/css/bootstrap.css";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <SSRProvider>
      <NextNProgress />
      <Component {...pageProps} />;
    </SSRProvider>
  );
}

export default MyApp;
