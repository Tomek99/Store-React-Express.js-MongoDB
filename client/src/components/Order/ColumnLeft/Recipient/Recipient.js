import React, { useContext } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import styles from "./Recipient.module.scss";
import { Context } from "../../../../Contexts/Context";
import recipient_data from "../../../../data/recipient_data.json";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";

function Recipient() {
  const { user } = useContext(Context);

  return (
    <div className={styles.Recipient}>
      <HeadingThree title="Recipient details" />
      <div className={styles.recipientForm}>
        {recipient_data.map((item, index) => (
          <FieldComponent item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Recipient;
