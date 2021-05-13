import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import { Header, Footer } from "./";

import "tailwindcss/tailwind.css";

/**
 * Layout
 * @param {any} children
 */
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>ideas-to.dev - Cherchez une idée et développez-la!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <Header />

        <div className="sm:mt-20 lg:mt-28">{children}</div>

        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
