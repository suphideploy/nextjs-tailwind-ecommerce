
import HeaderTop from '@/components/HeaderTop'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeaderMain from '@/components/HeaderMain'
import Navbar from '@/components/Navbar'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/components/Footer'
import MobNavbar from '@/components/MobiNavbar'
import { ThemeProvider } from "@/components/theme-provider"
import "tw-elements/dist/css/tw-elements.min.css";
import Mobilbar from '@/components/Mobilbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <HeaderTop />
      <HeaderMain />
      <Navbar />
      <Mobilbar />
        {children}
       <Footer />
       </ThemeProvider>
       <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
       <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
     
    </html>
  )
}
