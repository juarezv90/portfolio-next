import Navbar from "../components/Navbar"
import ScrollBar from "../components/ScrollBar"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return ( <>
  <Navbar />
  <ScrollBar />
  < Component {...pageProps} />
  </>
  )
}

export default MyApp;
