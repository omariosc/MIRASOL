import ScrollReveal from './ScrollReveal'

export default function SubmissionCards() {
  return (
    <ScrollReveal className="content-block">
      <div className="content-block__container">
        <div className="focus-cards">
          <div className="focus-card -icon-inline">
            <div className="focus-card__header">
              <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <h3>Submission Portal</h3>
            </div>
            <p>Both registered reports and 3MP videos must be submitted through the CMT submission portal.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', textAlign: 'center' }}>
              <a className="action-element -primary" href="https://cmt3.research.microsoft.com/MIRASOL2026" target="_blank" rel="noopener">Submit via CMT Portal</a>
            </div>
          </div>
          <div className="focus-card -icon-inline">
            <div className="focus-card__header">
              <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Jury Recruitment</h3>
            </div>
            <p>Are you a researcher, academic, startup founder, or industry leader at the intersection of AI, healthcare, and innovation? We invite you to join as a jury member to evaluate submissions and mentor the next generation of innovators.</p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', textAlign: 'center' }}>
              <a className="action-element -primary" href="mailto:info.camera.mri@gmail.com">Contact Us to Join</a>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
