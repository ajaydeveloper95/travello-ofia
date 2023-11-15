import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Thebagpacker is a travel website.thebagpacker website developer is ajay budaniya. Thebagpacker travel package is available 365 Days"
        />
        <meta
          name="keywords"
          content="Best travel website, thebagpacker, ajay budaniya,ajay kumar, travel website,the bag packer,india travel website"
        />
        <meta name="author" content="ajay budaniya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
