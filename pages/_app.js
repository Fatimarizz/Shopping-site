import React, { ReactElement } from 'react';
import "global.css"
// import Header from '../components/header';


function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
