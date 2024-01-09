"use client";
import {React, useRef, useState} from 'react';
import Split from '@/components/Common/Split';
import contentFormData from "@/data/contact-form.json";
import emailjs from '@emailjs/browser';

function ContactForm({ theme }) {
    const [success, setSuccess] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mqvtf26', 'template_hbwf6e9', form.current, 'LRUSLuZx-z2ywMm_U')
      .then((result) => {
          setSuccess(true);
        }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>

              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="messages my-4 text-success">
                  {success && <span>Email sent successfully!</span>}
                </div>

                <div className="controls">
                  <div className="form-group">
                    <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                  </div>

                  <div className="form-group">
                    <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                  </div>

                  <div className="form-group">
                    <textarea id="form_message" name="message" placeholder="Message" rows="4"
                      required="required"></textarea>
                  </div>

                  <button type="submit" className={`butn ${theme === 'light' ? 'dark' : 'bord'}`}>
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <Split>
                <h3 className="wow" data-splitting>{contentFormData.title}</h3>
              </Split>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{contentFormData.email}</a>
                </h5>
              </div>
              <Split>
                <h3 className="wow" data-splitting>Visit Us.</h3>
              </Split>
              <div className="item">
                <h6>
                  {contentFormData.location.first}
                  <br />
                  {contentFormData.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a href="https://www.linkedin.com/company/100859116/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm