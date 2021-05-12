import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

/**
 * Layout
 * @param {any} children
 */
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ideas-to.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <Header />

        <main className="container">{children}</main>

        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
