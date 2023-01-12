import React, { useState, useEffect } from "react";

const withScroll = (Component) => (props) => {
  const debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    const debounced = debounce(() => {
      if (window.scrollY > 200) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    }, 250);

    return () => {
      window.removeEventListener(`scroll`, debounced);
    };
  }, []);

  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const debounced = debounce(() => {
      if (window.scrollY > 200) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    }, 250);

    window.addEventListener("scroll", debounced);

    return () => {
      window.removeEventListener(`scroll`, debounced);
    };
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const newProps = {
    ...props,
    showScrollToTopButton,
    scrollToTop,
  };

  return <Component {...newProps} />;
};

export { withScroll };
export default withScroll;
