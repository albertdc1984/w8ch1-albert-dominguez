import Layout from "../components/Layout/Layout";
import Navigator from "../components/Navigator/Navigator";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
