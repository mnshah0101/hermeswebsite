import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Page components
import Navbar from '@/components/Common/Navbar';
import Header from '@/components/Headers/Header4';
import AboutUs from '@/components/AboutUs/AboutUs3';
import Works from '@/components/Works/Works3';
import Services from '@/components/Services/Services3';
import MinimalArea2 from '@/components/Others/MinimalArea2';
import FullTestimonials from '@/components/Testimonials/FullTestimonials';
import Team from '@/components/Team/Team1';
import Blogs from '@/components/Blogs/Blogs4';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';
import LoadingScreen from "@/components/Common/Loader";

export const metadata = {
  title: 'HERMES Group',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
      '/css/dark.css',
    ])
  }
}

export default function LandingPreview() {
  return (
    <>
    <LoadingScreen />
      <Navbar />
      <Header />
      <AboutUs />
      <Works />
      <Services />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs />
      <CallToAction />
      <Footer />

      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/simpleParallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/wowInit.js"></Script>
    </>
  )
}
