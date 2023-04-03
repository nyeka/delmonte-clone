import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home";
import Navbar from "../components/navbar";
import Products from "../components/products";
import bg from "../public/bg.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="dQvIQjf3MbluGD75wW444KQ7V33Zpq-s-FMBhlFejBg"
        />
        <title>Delmonte | Nyoman</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta property="og:site_name" content="Delmonte-Clone" />
        <meta property="fb:admins" content="Nyoman Eka" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:locale:alternate" content="ms_MY" />
        <meta property="og:title" content="Delmonte-clone" />
        <meta
          property="og:image"
          content="https://www.delmonte.com/sites/default/files/banner//2022-11/Unique%20Veg_0.jpg"
        />
        <meta
          property="og:description"
          content="Delmonte Web Clone | Dikelola oleh Nyoman Eka Swardita"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://delmonte.vercel.app/" />
        <meta
          property="og:image"
          content="https://www.delmonte.com/sites/default/files/banner//2022-11/Unique%20Veg_0.jpg"
        />
        <meta property="og:image:secure_url" content={"/bg.svg"} />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Nyoman Eka Swardita" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.delmonte.com/sites/default/files/banner//2022-11/Unique%20Veg_0.jpg"
        />
        <meta name="twitter:title" content="Nyoman Eka" />
        <meta
          name="twitter:description"
          content="Delmonte Web Clone | Dikelola oleh Nyoman Eka Swardita"
        />
        <meta
          name="description"
          content="Delmonte Web Clone | Dikelola oleh Nyoman Eka Swardita"
        />
        <meta content="index,follow" name="robots" />
        <meta content="Indonesian" name="language" />
        <meta content="index,follow" name="googlebot" />
        <meta content="follow, all" name="Googlebot-Image" />
        <meta content="follow, all" name="Scooter" />
        <meta content="follow, all" name="msnbot" />
        <meta content="follow, all" name="alexabot" />
        <meta content="follow, all" name="Slurp" />
        <meta content="follow, all" name="ZyBorg" />
        <meta content="follow, all" name="Scooter" />
        <meta content="true" name="MSSmartTagsPreventParsing" />
        <meta content="ALL" name="SPIDERS" />
        <meta content="ALL" name="WEBCRAWLERS" />
        <meta
          content="aeiwi, alexa, alltheWeb, altavista, aol netfind, anzwers, canada, directhit, euroseek, excite, overture, go, google, hotbot. infomak, kanoodle, lycos, mastersite, national directory, northern light, searchit, simplesearch, Websmostlinked, webtop, what-u-seek, aol, yahoo, webcrawler, infoseek, excite, magellan, looksmart, bing, cnet, googlebot"
          name="search engines"
        />
      </Head>
      <Navbar />
      <HomePage />
      <Products />
    </div>
  );
};

export default Home;
