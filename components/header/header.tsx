import React from "react";
import DynamicBG from "./dynamicbg";
import styles from "@/styles/header.module.css";
import ReadImages from "./actions/read_images";

export default async function Header() {
  return (
    <header className={styles.header__container}>
      <DynamicBG imagePaths={await ReadImages() as string[]}/>
    </header>
  );
}
