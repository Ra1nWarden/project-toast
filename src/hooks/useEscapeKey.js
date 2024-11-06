import React from "react";

export default function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEvent(event) {
      if (event.key === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleEvent);
    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [callback]);
}
