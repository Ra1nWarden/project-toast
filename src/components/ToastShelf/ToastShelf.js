import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, removeToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              message={toast.message}
              onClose={(event) => removeToast(toast.id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
