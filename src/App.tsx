import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import LearnAffordableHousing from './pages/LearnAffordableHousing'
import MythsVsFacts from './pages/MythsVsFacts'
import ExploreDevelopments from './pages/ExploreDevelopments'
import ProjectDetail from './pages/ProjectDetail'
import Stories from './pages/Stories'
import VisualizeYourStreet from './pages/VisualizeYourStreet'
import ForDevelopers from './pages/ForDevelopers'
import Resources from './pages/Resources'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<LearnAffordableHousing />} />
        <Route path="/myths-vs-facts" element={<MythsVsFacts />} />
        <Route path="/explore" element={<ExploreDevelopments />} />
        <Route path="/explore/:slug" element={<ProjectDetail />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/visualize-your-street" element={<VisualizeYourStreet />} />
        <Route path="/for-developers" element={<ForDevelopers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
