import React from "react";
import styles from '../styles/section.module.css';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
}

function Section({ children, title }: SectionProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
