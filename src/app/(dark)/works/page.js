import React from 'react';
//= Page components
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcasesFullScreen from '@/components/Showcases/ShowcaseFullscreen';

export const metadata = {
  title: 'HERMESGroup - Portfolio'
}

export default function ShowcasePage() {
  return (
    <>
      <NavbarFullMenu />
      <ShowcasesFullScreen />
    </>
  )
}
