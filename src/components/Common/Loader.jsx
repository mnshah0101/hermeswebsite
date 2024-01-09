'use client';
import { useEffect } from 'react';
import loadingPace from "@/common/loadingPace";
import '@/styles/loading.css';

function LoadingScreen() {
  useEffect(() => {
    setTimeout(() => {
      if (typeof Pace !== 'undefined') loadingPace();
    }, 1000);
  });

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
