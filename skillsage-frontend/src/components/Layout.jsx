import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <Header />
        </div>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
