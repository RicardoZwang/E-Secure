import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // This triggers the scroll effect on every route change
}

export default scrollToTop;
