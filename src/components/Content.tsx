import React from "react";
import styles from "../styles/content.module.css";

interface ContentProps {
  children: React.ReactNode;
}

function Content({children}: ContentProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Content;
