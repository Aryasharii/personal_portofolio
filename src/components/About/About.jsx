import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="foto saya"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer skilled in building responsive web applications using React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Scientist</h3>
              <p>
                I have a solid background in data science, specializing in data analysis, modeling, and visualization to solve real-world challenges.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Analytics icon" />
            <div className={styles.aboutItemText}>
              <h3>Business Intelligence Enthusiast</h3>
              <p>
                I'm passionate about leveraging business intelligence tools to generate insights and drive impactful solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
