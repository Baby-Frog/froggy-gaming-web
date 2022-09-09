import { useEffect, useRef, useState } from "react";

export default function useClickOutside(dom = "button", initialState) {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(initialState);
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        nodeRef &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dom]);
  return {
    show,
    setShow,
    nodeRef,
  };
}
