import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SEO from './components/SEO'
import Home from './pages/Home'

const CallForPapers = lazy(() => import('./pages/CallForPapers'))
const HowToSubmit = lazy(() => import('./pages/HowToSubmit'))
const NextGenInterchange = lazy(() => import('./pages/NextGenInterchange'))
const AmbassadorProgram = lazy(() => import('./pages/AmbassadorProgram'))
const OrganisingCommittee = lazy(() => import('./pages/OrganisingCommittee'))
const Schedule = lazy(() => import('./pages/Schedule'))
const KeynoteSpeakers = lazy(() => import('./pages/KeynoteSpeakers'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SEO />
      <Navigation />
      <main>
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
