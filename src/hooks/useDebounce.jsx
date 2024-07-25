import { useEffect, useState } from "react";

function useDebounce(value, delay = 1000) {
  const [debouncevalue, setDebouncevalue] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncevalue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value]);

  return debouncevalue;
}

export default useDebounce;
