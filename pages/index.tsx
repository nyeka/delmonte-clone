import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home";
import Navbar from "../components/navbar";
import Products from "../components/products";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="dQvIQjf3MbluGD75wW444KQ7V33Zpq-s-FMBhlFejBg"
        />
        <title>Dimas Miftah</title>
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
          content={
            "/bg.svg" ||
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.gamepur.com%2Fwp-content%2Fuploads%2F2021%2F10%2F11220107%2FRaiden-Shogun.jpg&f=1&nofb=1&ipt=77903d2d668900fc6440219f53211216a4a304bb72193c1f7bcdef1c6c861008&ipo=images"
          }
        />
        <meta
          property="og:description"
          content="Delmonte Web Clone | Dikelola oleh Nyoman Eka Swardita"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://delmonte.vercel.app/" />
        <meta property="og:image" content={`/bg.svg`} />
        <meta property="og:image:secure_url" content={"/bg.svg"} />
        <meta property="og:image:width" content="640" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Nyoman Eka Swardita" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={"/bg.svg"} />
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
