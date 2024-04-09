import React, { ReactNode } from "react";
import styles from "../styles/slider.module.css";

interface SliderProps {
  children: ReactNode;
}

function Slider({ children }: SliderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Slider;