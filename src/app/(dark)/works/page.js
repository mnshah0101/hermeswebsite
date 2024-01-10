import React from 'react';
//= Page components
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcasesFullScreen from '@/components/Showcases/ShowcaseFullscreen';
import LoadingScreen from '@/components/Common/Loader';
export const metadata = {
  title: 'HERMESGroup - Portfolio'
}

export default function ShowcasePage() {
  return (
    <>
        <LoadingScreen />

      <NavbarFullMenu />
      <ShowcasesFullScreen />
    </>
  )
}
