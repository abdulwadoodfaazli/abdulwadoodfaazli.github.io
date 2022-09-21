import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "react-bootstrap";
import Layout from "../components/layout";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SSRProvider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
