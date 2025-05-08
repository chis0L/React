import React, { Suspense } from "react";
import modul from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={modul.Layout}>
      <Header />
      <div className={modul.Wrapper}>
        <main className={modul.Main}>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
        <footer className={modul.Footer}>
          React Question Cards Application | {currentYear} <br />
          by Egor Abramov
        </footer>
      </div>
    </div>
  );
};
