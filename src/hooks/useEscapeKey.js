import React from 'react';

export default function useEscapeKey(action) {
  React.useEffect(() => {
    window.addEventListener("keydown", action);
    return () => {
      window.removeEventListener("keydown", action);
    };
  }, [action]);
}