'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Parallax, EffectFade } from 'swiper';
//= Scripts
import removeSlashFromBagination from '@/common/removeSlashpagination';
import thumparallaxDown from '@/common/thumparallaxDown';

const swiperImageOptions = {
  modules: [Pagination, Navigation, Parallax, EffectFade],
  speed: 800,
  effect: "fade",
  spaceBetween: 0,
  loop: true,
  parallax: true,
  slidesPerView: 1,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".swiper-pagination",
  },
  onSwiper: (swiper) => {
    for (var i = 0; i < swiper.slides.length; i++) {
      let img = swiper.slides[i].childNodes[0].childNodes[0].childNodes[0]
      img.setAttribute(
        "data-swiper-parallax",
        0.75 * swiper.width
      );
    }
  }
}

const swiperTextOptions = {
  modules: [Pagination, Navigation],
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    prevEl: ".controls .swiper-button-prev",
    nextEl: ".controls .swiper-button-next",
  },
  pagination: {
    type: "fraction",
    clickable: true,
    el: ".controls .swiper-pagination",
  },
}

function Blogs4() {
  useEffect(() => {
    removeSlashFromBagination();
    thumparallaxDown();
  }, []);

  return (
    <section className="blog-crv sub-bg">
      <div className="stories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 no-padding">
              <Swiper className="swiper-wrapper swiper-container swiper-img" {...swiperImageOptions}>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      <img className="thumparallax" src="/img/home/chatbot.jpeg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      <img className="thumparallax" src="/img/home/fullstack.jpeg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      <img className="thumparallax" src="/img/home/analytics.jpeg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-6 no-padding valign">
              <Swiper className="swiper-wrapper swiper-container swiper-content" {...swiperTextOptions}>
                <SwiperSlide className="SwiperSlide">
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">Trending</a>
                      </div>
                      <div className="info">
                        <a href="#0">

                        </a>
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#0">
                            Custom Chatbot Solutions
                          </a>
                        </h4>
                      </div>
                      <div className="text">
                        <p>
                          Let us create customer support or informational chatbots to improve the customer support experience or drive sales.
                        </p>
                      </div>
                      <div className="more">
                        <Link href="/about">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">Trending</a>
                      </div>
                      <div className="info">
                     
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#0">
                            Full Stack Application Development
                          </a>
                        </h4>
                      </div>
                      <div className="text">
                        <p>
                          We create device-agnostic web applications that fulfill customer needs. Whether its an online booking system or a web-based game, we can do it.
                        </p>
                      </div>
                      <div className="more">
                        <Link href="/about">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item wow fadeIn" data-wow-delay=".6s">
                    <div className="content">
                      <div className="tags">
                        <a href="#0">Trending</a>
                      </div>
                      <div className="info">
                       
                      </div>
                      <div className="title">
                        <h4>
                          <a href="#0">Data Analytics Software</a>
                        </h4>
                      </div>
                      <div className="text">
                        <p>
                          Let AI do the heavy lifting for you. We can create data analytics software to help you make better business decisions.
                        </p>
                      </div>
                      <div className="more">
                        <Link href="/about">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="controls">
            <div className="swiper-button-next swiper-nav-ctrl next-ctrl">
              <i className="fas fa-caret-up"></i>
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl">
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs4;