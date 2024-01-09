'use client';
import React, { useEffect } from 'react';
//= Scripts
import thumparallaxDown from '@/common/thumparallaxDown';


function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown()
  }, [])

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src="/img/min-area.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
               At the Hermes Group, with knowledge as our mighty wand and technology as our winged sandals, we strive to traverse the vast potential of AI and provide creative, intelligent solutions to multifaceted business problems. 

              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6><span>1</span> How We Work</h6>
                  <p>
                    We work indvidually with each client to understand their business needs.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6><span>2</span> Our Goals</h6>
                  <p>
                    We want to uncover the hidden potential of AI and use it to solve real-world problems.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6><span>3</span> Why Us?</h6>
                  <p>
                    Although we are highly skilled, we are constantly learning and innovating.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1