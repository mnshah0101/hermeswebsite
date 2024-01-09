'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/home/hermes_home_meeting.jpeg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="color-font">Dream. Innovate. Implement.</h4>
              <p className="wow txt words chars splitting" data-splitting>
                Our software agency works from the ground up, directly with the owners and their needs. We are a team of
                passionate developers, designers, project managers, and writers who work together to create innovative solutions for our clients.
              </p>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  We provide free initial consultation and support.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  Timelines suited for our clients.
                </li>
              </ul>
              <Link href="/about" className="butn bord curve mt-40 wow fadeInUp" data-wow-delay=".8s">
                <span>Discover</span>
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1