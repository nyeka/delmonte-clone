import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/home";
import Navbar from "../components/navbar";
import Products from "../components/products";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Products />
    </div>
  );
};

export default Home;
