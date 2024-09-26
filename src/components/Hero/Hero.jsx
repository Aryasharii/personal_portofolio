import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arya</h1>
        <p className={styles.description}>
        I'm a 7th semester Computer Science student with a strong focus on data science and business intelligence. I also have experience in web development using React. If you're interested in my projects and skills in data analytics or web development, feel free to reach out!
        </p>
        <a href="mailto:aryaashari94@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
