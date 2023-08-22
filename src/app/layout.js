import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish(
  {
    weight:'400',
   subsets: ['latin'],
   display:'swap'
   })

export const metadata = {
  title: 'Movie Verse ',
  description: 'World of Movie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
