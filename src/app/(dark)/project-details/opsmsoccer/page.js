import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ProjectDetails2Header from '@/components/Project/ProjectDetails2Header';
import ProjectIntroduction from '@/components/Project/ProjectIntroduction';
import ProjectDescription from '@/components/Project/ProjectDescription';
import NextProject from '@/components/Project/NextProject';
import Footer from '@/components/Common/Footer';
//= Static Data
import ProjectDate from "@/data/opsmsoccer_details.json";

export const metadata = {
  title: 'HERMESGroup - OPSMSoccer Project Details'
}

export default function ProjectDetailsPage() {
  return (
    <>
      <Loading />
      <Navbar />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <NextProject />
        <Footer />
      </div>
    </>
  )
}
