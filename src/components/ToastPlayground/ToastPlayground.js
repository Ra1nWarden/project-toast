import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);
  function submitForm(event) {
    event.preventDefault();
    const id = Date.now();
    const toast = { variant, message, id };
    setToasts([...toasts, toast]);
    setVariant("notice");
    setMessage("");
  }
  function removeToast(id) {
    const newToasts = toasts.filter((item) => item.id !== id);
    setToasts(newToasts);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} removeToast={removeToast} />

      <form onSubmit={submitForm}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                className={styles.messageInput}
                onChange={(event) => {
                  event.preventDefault();
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((each) => (
                <label htmlFor={`variant-${each}`} key={each}>
                  <input
                    id={`variant-${each}`}
                    type="radio"
                    name="variant"
                    value={each}
                    checked={variant === each}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {each}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
