import React from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,shrink-to-fit=no,maximum-scale=1'
        />
        <title>Islam Aboamh - Homepage</title>
      </Head>
      <div className='homeSection'>
        <div className='container'>
          <Navbar />
          <Sidebar />
        </div>
        <main className='main'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
