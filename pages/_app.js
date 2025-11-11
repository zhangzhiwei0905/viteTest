import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}