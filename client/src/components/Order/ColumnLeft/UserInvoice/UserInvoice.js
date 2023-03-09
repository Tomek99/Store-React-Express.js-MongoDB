import React, { useState } from "react";
import HeadingThree from "../../../HeadingThree/HeadingThree";
import ConciseInfo from "../ExtraInfo/ConciseInfo/ConciseInfo";
import styles from "./UserInvoice.module.scss";
import user_invoice_data from "../../../../data/user_invoice_data.json";
import FieldComponent from "../../../FormikComponents/FieldComponent/FieldComponent";

function UserInvoice() {
  const [showInvoice, setShowInvoice] = useState(false);

  function handleInvoiceForm() {
    setShowInvoice(!showInvoice);
  }

  const conciseInfo =
    "In our online store, the proof of purchase is an invoice. As a standard, we issue it to the data from the delivery address.";
  return (
    <div className={styles.Invoice}>
      <HeadingThree title="Invoice details" />
      <ConciseInfo text={conciseInfo} />
      <div>
        <label htmlFor="invoice" className={styles.invoiceLabel}>
          <input id="invoice" type="checkbox" onClick={handleInvoiceForm} />
          <span>I would like to provide other invoice details</span>
        </label>
      </div>
      {showInvoice ? (
        <div className={styles.InvoiceForm}>
          {user_invoice_data.map((item, index) => (
            <FieldComponent item={item} key={index} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default UserInvoice;
