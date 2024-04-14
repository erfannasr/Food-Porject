import React from "react";
import style from "../Layout/Layout.module.css";
import Link from "next/link";
function Layout({ children }) {
  return (
    <>
      <header className={style.header}>

        <div className={style.left}>
          <Link href={"/"}>Erfan Food</Link>
        </div>

        <div className={style.right}>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/categories"}>Categorise</Link>
        </div>

      </header>

     <div className={style.container}>{children}</div> 

      <footer className={style.footer}>
         <a href="">Erfan Start</a>
         Next.js Course ||||| Erfan Food Project
      </footer>
    </>
  );
}

export default Layout;
