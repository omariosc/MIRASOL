import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import DatesTimeline from '../components/DatesTimeline'
import SubmissionCards from '../components/SubmissionCards'

export default function NextGenInterchange() {
  return (
    <>
      <PageHeader title="NextGen Interchange" />

      {/* Overview */}
      <ScrollReveal className="content-block">
        <div className="content-block__container"><div className="text-block"><div className="rte">
          <h2>About NextGen Interchange</h2>
          <p>The NextGen Interchange Hub connects early-career researchers and dynamic startups with industry leaders at MICCAI. The initiative aims to foster collaboration through showcasing groundbreaking ideas, developing localized solutions, and building partnerships for Low- and Middle-Income Countries (LMICs).</p>
          <p>Finalists are invited to present live before a panel of industry and academic experts for feedback and networking opportunities.</p>
        </div></div></div>
      </ScrollReveal>

      {/* Application Requirements - 2 cards */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.5rem' }}>
            <h2>Application Requirements</h2>
            <p>Applicants must complete two required submissions:</p>
          </div>
          <div className="focus-cards">
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
                <h3>Registered Report</h3>
              </div>
              <p>A concise 4-page document (plus 2-page reference allowance) outlining the technical methodology behind your research or startup solution. Explain your technical approach, innovation, and real-world applicability for LMICs. Focus on clarity, brevity, and a strong emphasis on impact.</p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              </div>
                <h3>3-Minute Pitch (3MP) Video</h3>
              </div>
              <p>A story-driven video presentation of your idea. Maximum 3 minutes, MP4 format preferred. One static slide permitted (no animation). Submit via Google Drive link through CMT (must be accessible to anyone with the link). Avoid technical jargon and dense visuals.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Video Content - 2x2 cards */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.5rem' }}>
            <h2>What Your Video Must Cover</h2>
          </div>
          <div className="focus-cards">
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
                <h3>The Problem</h3>
              </div>
              <p>Clearly define the challenge you are tackling and establish the context for your work.</p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
                <h3>Why It Matters</h3>
              </div>
              <p>Explain the significance and real-world impact, especially for communities in resource-constrained settings.</p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
                <h3>Your Approach</h3>
              </div>
              <p>Describe your methodology and how your solution addresses the problem in a practical, accessible way.</p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
                <h3>Your Contribution</h3>
              </div>
              <p>Highlight what is novel about your work and its potential for scalable, lasting impact.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Tips for Success - 2x2 cards */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.5rem' }}>
            <h2>Tips for Success</h2>
          </div>
          <div className="focus-cards">
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
                <h3>Tell a Story</h3>
              </div>
              <p>Take the audience on a journey from problem to solution. A compelling narrative makes your idea memorable.</p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </div>
                <h3>Keep It Simple</h3>
              </div>
              <p>Use analogies and relatable examples. Explain concepts as if speaking to an intelligent non-expert. Avoid dense visuals and jargon.</p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
                <h3>Show Your Passion</h3>
              </div>
              <p>Enthusiasm is contagious and helps your message stick. Let your genuine interest in the problem shine through.</p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
              </div>
                <h3>Practice</h3>
              </div>
              <p>Record multiple takes, test with friends or colleagues, and time yourself carefully. Preparation makes perfect.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Evaluation Criteria */}
      <ScrollReveal className="content-block">
        <div className="content-block__container"><div className="text-block">
          <div className="rte">
            <h2>Evaluation Criteria</h2>
            <p>All submissions will be evaluated according to the following criteria. <strong style={{color:'var(--theme-primary)'}}>Ideas must address local LMIC needs to pass the Locality requirement.</strong></p>
          </div>
          <div className="eval-criteria">

            {/* Donut chart + legend */}
            <div className="eval-chart-row">
              <div className="eval-donut-wrapper">
                <div className="eval-donut" />
                <div className="eval-donut-center">
                  <span className="eval-donut-center__label">Scored</span>
                  <span className="eval-donut-center__title">Criteria</span>
                </div>
              </div>
              <div className="eval-legend">
                <div className="eval-legend-item">
                  <div className="eval-legend-item__bar" style={{background:'#d97706'}} />
                  <div className="eval-legend-item__info">
                    <span className="eval-legend-item__name">Innovation</span>
                    <span className="eval-legend-item__pct" style={{color:'#d97706'}}>40%</span>
                  </div>
                </div>
                <div className="eval-legend-item">
                  <div className="eval-legend-item__bar" style={{background:'#0284c7'}} />
                  <div className="eval-legend-item__info">
                    <span className="eval-legend-item__name">Feasibility</span>
                    <span className="eval-legend-item__pct" style={{color:'#0284c7'}}>30%</span>
                  </div>
                </div>
                <div className="eval-legend-item">
                  <div className="eval-legend-item__bar" style={{background:'#7c3aed'}} />
                  <div className="eval-legend-item__info">
                    <span className="eval-legend-item__name">Global Scalability</span>
                    <span className="eval-legend-item__pct" style={{color:'#7c3aed'}}>30%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div></div>
      </ScrollReveal>

      {/* Key Dates */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container"><div className="text-block">
          <div className="rte"><h2>Key Dates</h2></div>
          <DatesTimeline items={[
            { label: 'Submission Deadline', value: 'TBC' },
            { label: 'Acceptance Notification', value: 'TBC' },
            { label: 'Camera-ready Submission', value: 'TBC' },
            { label: 'Workshop Date', value: 'TBC (October 2026)' },
            { label: 'Workshop Proceedings Submission', value: 'TBC' },
          ]} />
        </div></div>
      </ScrollReveal>

      <SubmissionCards />
    </>
  )
}
