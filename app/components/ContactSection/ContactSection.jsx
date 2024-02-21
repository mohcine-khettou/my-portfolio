import { Message } from "@/app/assets/icons";
import React from "react";
import styles from "./styles.module.scss";
import Form from "./Form";
const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className="subtitle">
        <span>
          {" "}
          <Message />{" "}
        </span>
        <span>Contact</span>
      </div>
      <h2 className="section-title">
        Let&apos;s work <span className="green-text">Together</span>
      </h2>
      <Form />
    </section>
  );
};

export default ContactSection;
