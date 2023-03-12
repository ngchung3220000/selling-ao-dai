import { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [deBouncedValue, setDeBounecedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDeBounecedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return deBouncedValue;
}
