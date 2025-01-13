"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/banner.module.css";

export default function Banner() {
  return (
    <div className={styles.header__banner}>
      <Image
        src="/ottdfansite-logo.png"
        alt="OpenTTD FansiteLogo"
        width="587"
        height="72"
        priority
      />
    </div>
  );
}
