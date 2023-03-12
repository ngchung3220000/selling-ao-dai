import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { clickCart } from "../../../../../redux/Slices/navbarSlice";

export const UseOutsideClick = (handler) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
