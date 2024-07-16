import { useState, useEffect, useRef } from "react";

const useOnScreen = (options) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  //Bascially allows section to appear when it reachs that sections
  useEffect(() => {
    // Correctly create a new Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      // Get the first entry
      const [entry] = entries;
      // Set visibility based on whether the element is intersecting
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]); // Dependency array includes ref and options to handle updates

  return [ref, isVisible];
};
export default useOnScreen;
