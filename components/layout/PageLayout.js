import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../navbar/Navbar";

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
        </div>
        <main className='main'>{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
