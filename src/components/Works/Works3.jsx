'use client';
import React from 'react';
import Link from 'next/link';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  centeredSlides: true,
  autoPlay: true,
  loop: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 2,
    },
  }
}

function Works3() {
  return (
    <section className="work-carousel2 metro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
              <h3 className="wow color-font">
                Our Recent Projects 
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper className="swiper-wrapper" {...swiperOptions}>
                
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/home/opsm_image.png" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h6>
                        <Link href="https://www.opsmpro.com">
                          OPSMPro
                        </Link>
                      </h6>
                      <h4>
                        <Link href="https://www.opsmpro.com">
                          Changing the face of North American Soccer.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/home/fsva_image.png" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h6>
                        <Link href="https://www.facultysenateofvirginia.org">
                          Faculty Senate of Virginia
                        </Link>
                      </h6>
                      <h4>
                        <Link href="https://www.facultysenateofvirginia.org">
                          The largest college faculty organization in Virginia.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/home/counsia_image.png" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h6>
                        <Link href="https://www.counsia.com">
                          Counsia
                        </Link>
                      </h6>
                      <h4>
                        <Link href="https://www.counsia.com">
                          Innovating traditional college counseling.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="content">
                    <div className="img">
                      <span className="imgio">
                        <div className="wow cimgio" data-delay="500"></div>
                        <img src="/img/home/rai_image.png" alt="" />
                      </span>
                    </div>
                    <div className="cont">
                      <h6>
                        <Link href="https://www.rvarai.com">
                          Richmond Academic Institute
                        </Link>
                      </h6>
                      <h4>
                        <Link href="https://www.rvarai.com">
                          Richmond's premier tutoring and test prep center.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              
              </Swiper>
              <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                <i className="ion-ios-arrow-right"></i>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                <i className="ion-ios-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works3;