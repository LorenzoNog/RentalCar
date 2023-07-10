import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'RentaCar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative overflow-x-hidden'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
