import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
