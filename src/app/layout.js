//= Global Styles
import "@/styles/main.scss";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";
import Script from "next/script";


export const metadata = {
  title: 'HERMES Group',
  description: 'Software Development Company Focusing on Generative AI, Web Development, and Business Consultancy',
  keywords: ['HTML5', 'Template', 'Vie', 'Multi-Purpose', 'themeforest'],
  icons: {
    icon: "/img/hermesicon.png",
    shortcut: "/img/hermesicon.png"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
       
    </html>
  )
}
