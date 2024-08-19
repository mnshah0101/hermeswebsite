import React from "react";

const Header4 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">Generative AI</span> For Your{" "}
                 <span className="color-font">Business</span>.
              </h1>
               <a href="/contact" className="butn bord curve mt-30">
                <span>Book Project</span>
              </a>
            </div>
           
          </div>
          
        </div>
      </div>

      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Header4;
