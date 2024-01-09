import React from 'react';
import "@/styles/navbar.css";

function Footer({ hideBGCOLOR }) {
    const year = new Date().getFullYear(); 
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Location</h6>
                    <p>Richmond, Virginia</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hermesdevelopergroup@gmail.com</p>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="item">
              <div className="logo">
                <span className='logo_text'>HERMES GROUP</span>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/company/100859116">
                  <i className="fab fa-linkedin"></i>
                </a>
                
              </div>
              <div className="copy-right">
                <p>
                  © {year}, HERMES GROUP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer