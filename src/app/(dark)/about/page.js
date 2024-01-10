import React from 'react';
//= Page components
import Navbar from '@/components/Common/Navbar';
import PagesHeader from '@/components/Headers/PagesHeader';
import AboutIntro from '@/components/AboutUs/AboutIntro';
import Services from '@/components/Services/Services1';
import Team from '@/components/Team/Team1';
import MinimalArea from '@/components/Others/MinimalArea1';
import Clients from '@/components/Clients/Clients1';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';
import LoadingScreen from '@/components/Common/Loader';

export const metadata = {
  title: 'HERMESGroup - About HermesGroup'
}

function AboutDark() {
  return (
    <>
    <LoadingScreen />
      <Navbar />
      <PagesHeader imageLink="/img/slid/about.jpg">Our dedicated team of developers is bursting with talent, experience and passion for what we do.</PagesHeader>
      <AboutIntro />
      <Services style="4item" />
      <Team />
      <MinimalArea />
      <Clients theme="dark" />
      <CallToAction />
      <Footer />
    </>
  )
}

export default AboutDark