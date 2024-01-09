'use client'
import { useEffect, useState } from 'react';
import loadingPace from "@/common/loadingPace";
import '@/styles/loading.css';

function LoadingScreen() {
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    setIsTimeOver(false); // Initialize state here

    const timer = setTimeout(() => {
      if (typeof Pace !== 'undefined') loadingPace();
      setIsTimeOver(true);
    }, 3000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Skip rendering the loader if time is not over yet
  if (isTimeOver) return null;

  return (
    <div className="hideX">
      <div className="loading">
        <span className = "load_text">H</span>
        <span className = "load_text">e</span>
        <span className = "load_text">r</span>
        <span className = "load_text">m</span>
        <span className = "load_text">e</span>
        <span className = "load_text">s</span>
      </div>
      <div id="preloader"></div>
    </div>
  );
};

export default LoadingScreen;