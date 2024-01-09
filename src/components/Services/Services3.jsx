'use client';
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import cardMouseEffect from "@/common/cardMouseEffect";

function Services3() {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);

  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                What We Do
              </h6>
              <h3 className="wow color-font">
                We help to create next generation software for you.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>Business Tools</h5>
              <p>
Upgrade your efficiency with our custom business tools designed to streamline operations and maximize productivity.
              </p>
              <Link href="/about" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>Automation</h5>
              <p>
                Streamline workflow with our AI-driven automation tools, eliminating repetitive tasks and focusing resources on growth.
              </p>
              <Link href="/about" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>Real Strategies</h5>
              <p>
                More than just AI tools, we assist in creating result-driven strategies aligned with your business objectives.
              </p>
              <Link href="/about" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-color-wand"></i>
              </span>
              <h5>User Experience</h5>
              <p>
                 Prioritizing usage simplicity alongside effectiveness, our tools foster a memorable user experience, driving customer retention.
              </p>
              <Link href="/about" className="more-stroke">
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
