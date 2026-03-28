import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'

export default function HowToSubmit() {
  return (
    <>
      <PageHeader title="How to Submit" />

      {/* Submission Guidelines - 2x2 cards */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.5rem' }}>
            <h2>Submission Guidelines</h2>
          </div>
          <div className="focus-cards">
            <div className="focus-card">
              <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3>Format</h3>
              <p>Submissions are invited as long papers (8 pages of content plus 2 pages for references) in PDF format using the <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noopener">Springer Computer Science Proceedings template</a> (LaTeX or Word) and uploaded through the workshop paper submission portal.</p>
            </div>
            <div className="focus-card">
              <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3>Review Process</h3>
              <p>The MIRASOL Workshop review process will be double-blind. Therefore, authors are required to anonymize their submissions to prevent identification. Each submission will be rigorously reviewed by at least two external reviewers to assess its suitability for the workshop program.</p>
            </div>
            <div className="focus-card">
              <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3>Publication</h3>
              <p>Accepted long papers will be included in the workshop proceedings, which will be published. Consequently, submissions for long papers must adhere strictly to the submission format outlined above to ensure consistency across the proceedings.</p>
            </div>
            <div className="focus-card">
              <div className="focus-card__number">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3>Preprint Policy</h3>
              <p>Accepted short and long papers can be submitted to preprint repositories such as arXiv. Authors can post the submitted version to arXiv, but cannot post the camera-ready version published under Springer Computer Science Proceedings such as LNCS to arXiv during the publication embargo period.</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Submission Instructions</h2>
            <p>Papers must be submitted electronically as PDF files following <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines" target="_blank" rel="noopener">Springer conference proceedings style guidelines</a>. LaTeX and MS Word templates are available.</p>
            <div className="notice"><strong>Important:</strong> Modifications to the template are not allowed, and failure to comply with these formatting guidelines will result in the paper&rsquo;s rejection.</div>
          </div></div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Camera-Ready Submission</h2>
            <p>Authors of accepted papers are required to submit their camera-ready papers addressing reviewer feedback in their papers along with a rebuttal letter, electronically via the submission portal. Authors are given half a page to address reviewer feedback in their manuscript. Camera-ready papers must adhere strictly to the Springer LNCS style guidelines.</p>
            <p>Required camera-ready submissions include:</p>
            <ol>
              <li>Final paper (8.5 pages maximum including figures/tables plus 2 pages for references)</li>
              <li>Rebuttal letter addressing reviewer feedback</li>
              <li>Completed LNCS license to publish form</li>
            </ol>
          </div></div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Important Dates</h2>
            <table className="dates-table">
              <thead><tr><th>Milestone</th><th>Date</th></tr></thead>
              <tbody>
                <tr><td>Full Paper Submission Deadline</td><td>TBC</td></tr>
                <tr><td>Notification of Acceptance</td><td>TBC</td></tr>
                <tr><td>Camera-ready Submission</td><td>TBC</td></tr>
                <tr><td>Workshop Date</td><td>TBC (October 2026)</td></tr>
                <tr><td>Workshop Proceedings Submission</td><td>TBC</td></tr>
              </tbody>
            </table>
          </div></div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Submission Portal</h2>
              <p>Submit your paper through the Microsoft CMT conference management system.</p>
            </div>
            <div className="text-block__button">
              <a className="action-element -primary" href="https://cmt3.research.microsoft.com/MIRASOL2026" target="_blank" rel="noopener">Submit via CMT Portal</a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
