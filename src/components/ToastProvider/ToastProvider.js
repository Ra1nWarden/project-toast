import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  function removeToast(id) {
    const newToasts = toasts.filter((item) => item.id !== id);
    setToasts(newToasts);
  }
  function addToast({ variant, message }) {
    const id = Date.now();
    const toast = { variant, message, id };
    setToasts([...toasts, toast]);
  }
  const value = { toasts, removeToast, addToast };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
