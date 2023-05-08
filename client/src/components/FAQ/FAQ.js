import React from "react";
import styles from "./FAQ.module.scss";
import frequentAskedQuestion from "../../data/FAQ.json";

function FAQ() {
  return (
    <div className={styles.FAQ}>
      <div className={styles.test}>
        {frequentAskedQuestion.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
