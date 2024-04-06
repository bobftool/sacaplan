import React, { ReactNode } from "react";
import styles from "../styles/slider.module.css";

interface props {
  children: ReactNode;
}

function Slider({ children }: props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Slider;