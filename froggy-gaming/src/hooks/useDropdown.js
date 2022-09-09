import { useEffect, useRef, useState } from "react";

export default function useDropdown(dom = "button", initialState) {
  const nodeRef = useRef(null);
  const [show, setShow] = useState(initialState);
  useEffect(() => {
    function handleDropdown(e) {
      if (e.target === dom) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleDropdown);
    return () => {
      document.removeEventListener("click", handleDropdown);
    };
  }, [dom]);
  return {
    show,
    setShow,
    nodeRef,
  };
}
