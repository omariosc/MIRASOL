import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SEO from './components/SEO'
import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'
import HowToSubmit from './pages/HowToSubmit'
import NextGenInterchange from './pages/NextGenInterchange'
import AmbassadorProgram from './pages/AmbassadorProgram'
import OrganisingCommittee from './pages/OrganisingCommittee'
import Schedule from './pages/Schedule'
import KeynoteSpeakers from './pages/KeynoteSpeakers'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SEO />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/how-to-submit" element={<HowToSubmit />} />
          <Route path="/nextgen-interchange" element={<NextGenInterchange />} />
          <Route path="/ambassador-program" element={<AmbassadorProgram />} />
          <Route path="/organising-committee" element={<OrganisingCommittee />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
