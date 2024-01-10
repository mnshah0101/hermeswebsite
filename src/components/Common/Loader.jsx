"use client"
import React, { useState, useEffect } from "react";
import "@/styles/loading.css";



export default function LoadingScreen() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fullscreen ${isLoading ? "visible" : "fade-out"}`}>
      <p className="load_text">HERMES</p>
    </div>
  );
}