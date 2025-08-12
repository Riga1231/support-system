import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This renders nested routes like <Home /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
