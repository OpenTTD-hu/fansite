import React from "react";
import styles from "@/styles/dynamic.module.css";
import Banner from "./banner";

//TODO: dynamic image selection
export default async function DynamicBG({
  imagePaths,
}: {
  imagePaths: string[];
}) {
  return (
    <div className={styles.header__dynamic_bg}>
    {/**dynamic image selection perhaps use cloudinary for cropping/resizing*/}
      <Banner />
    </div>
  );
}
