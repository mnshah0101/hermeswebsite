import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/Common/Footer';


export const metadata = {
  title: 'HERMESGroup - Contact'
}

export default function ContactPage() {
  return (
    <>
      <Loading />
      <Navbar />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Richmond,%20Virginia+(HERMES%20Group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%" height="100%" loading="lazy"></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </>
  )
}
