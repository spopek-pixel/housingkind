import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ChatWidget from '../chat/ChatWidget'
import useScrollToTop from '../../hooks/useScrollToTop'

export default function Layout({ children }: { children: ReactNode }) {
  useScrollToTop()
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <div key={pathname} className="animate-[fadeIn_0.4s_ease-out]">
          {children}
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
