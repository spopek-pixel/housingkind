import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ChatWidget from '../chat/ChatWidget'
import useScrollToTop from '../../hooks/useScrollToTop'

export default function Layout({ children }: { children: ReactNode }) {
  useScrollToTop()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
