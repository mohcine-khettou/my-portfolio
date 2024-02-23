import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Linkedin, Github, Twitter } from "@/app/assets/icons";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.card}>
        <div>
          <div></div>
          <Image
            src={"/assets/sidebar/me-transparent.png"}
            alt="mohcine-picture"
            width={400}
            height={420}
          />
        </div>
        <h1>Mohcine KHETTOU</h1>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/mohcine-khettou-3a84071b3/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a href="https://github.com/mohcine-khettou" target="_blank">
            <Github />
          </a>
          <a href="https://twitter.com/MohcineKhe57910" target="_blank">
            <Twitter />
          </a>
        </div>
        <a href="#portfolio" className={styles.btn + " btn"}>
          my projects
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
