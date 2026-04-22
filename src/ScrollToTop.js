import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This scrolls the main window to the top
    window.scrollTo(0, 0);
    
    // If you have a specific scrollable dashboard container 
    // instead of the window, you would target that here:
    // document.getElementById('main-content').scrollTo(0, 0);
  }, [pathname]); // Triggered every time the path changes

  return null;
};

export default ScrollToTop;