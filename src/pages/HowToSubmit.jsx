import ScrollReveal from '../components/ScrollReveal'
import DatesTimeline from '../components/DatesTimeline'

export default function HowToSubmit() {
  return (
    <>
      <header className="page-header">
        <div className="page-header__container">
          <h1 className="page-header__title">Submission Portal</h1>
          {/* <a
            className="btn-past-committees"
            href="https://openreview.net/group?id=MICCAI.org/2026/Workshop/MIRASOL&referrer=%5BHomepage%5D(%2F)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit via OpenReview Portal
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                marginLeft: "0.15rem",
                verticalAlign: "middle",
                flexShrink: 0,
              }}
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a> */}
          <span
            className="btn-past-committees"
            style={{ opacity: 0.5, pointerEvents: "none", cursor: "default" }}
          >
            TBA
          </span>
        </div>
      </header>

      {/* Submission Guidelines - 2x2 cards */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: "1.5rem" }}>
            <h2>Submission Guidelines</h2>
          </div>
          <div className="focus-cards">
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3>Format</h3>
              </div>
              <p>
                Submissions are invited as long papers (8 pages of content plus
                2 pages for references) in PDF format using the{" "}
                <a
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                  target="_blank"
                  rel="noopener"
                >
                  Springer Computer Science Proceedings template
                </a>{" "}
                (LaTeX or Word) and uploaded through the workshop paper
                submission portal.
              </p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3>Review Process</h3>
              </div>
              <p>
                The MIRASOL Workshop review process will be double-blind.
                Therefore, authors are required to anonymize their submissions
                to prevent identification. Each submission will be rigorously
                reviewed by at least two external reviewers to assess its
                suitability for the workshop program.
              </p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>Publication</h3>
              </div>
              <p>
                Accepted long papers will be included in the workshop
                proceedings, which will be published. Consequently, submissions
                for long papers must adhere strictly to the submission format
                outlined above to ensure consistency across the proceedings.
              </p>
            </div>
            <div className="focus-card -icon-inline">
              <div className="focus-card__header">
                <div className="focus-card__number">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3>Preprint Policy</h3>
              </div>
              <p>
                Accepted papers can be submitted to preprint repositories such
                as arXiv. Authors can post the submitted version to arXiv, but
                cannot post the camera-ready version published under Springer
                Computer Science Proceedings such as LNCS to arXiv during the
                publication embargo period.
              </p>
            </div>
          </div>
          <div className="rte" style={{ marginTop: '1.75rem' }}>
            <h3>Suggested Paper Structure</h3>
            <ol>
              <li><strong>Introduction / Background</strong></li>
              <li><strong>Previous Work</strong></li>
              <li>
                <strong>Methodology</strong>
                <br />
                <span style={{ fontSize: '0.85em', color: 'var(--gray-500)', paddingLeft: '0.25rem' }}>
                  Specifying compute resources, data (train/val/test split), and inference time
                </span>
              </li>
              <li><strong>Results</strong></li>
              <li><strong>Discussion</strong></li>
              <li><strong>Impact in RCS</strong></li>
            </ol>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Templates &amp; Resources</h2>
              <p>
                Papers must be submitted electronically as PDF files following
                the{" "}
                <a
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                  target="_blank"
                  rel="noopener"
                >
                  Springer LNCS conference proceedings guidelines
                </a>
                .
              </p>
              <ul>
                <li>
                  <a
                    href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19238648/data/v8"
                    target="_blank"
                    rel="noopener"
                  >
                    LaTeX Template
                  </a>
                </li>
                <li>
                  <a
                    href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19238706/data/v3"
                    target="_blank"
                    rel="noopener"
                  >
                    MS Word Template
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.springer.com/gp/computer-science/lncs"
                    target="_blank"
                    rel="noopener"
                  >
                    LNCS Series Website
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1M8-vpVuZOuWy-hNUFhOIL99hF7_igIze/view"
                    target="_blank"
                    rel="noopener"
                  >
                    Springer Instructions for Authors
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1jqfDXQLsmj9u5tP2GqTyRfceuSrBqcQv/view"
                    target="_blank"
                    rel="noopener"
                  >
                    Springer Code of Conduct for Book Authors
                  </a>
                </li>
              </ul>
              <div className="notice">
                <strong>Important:</strong> Modifications to the template are
                not allowed, and failure to comply with these formatting
                guidelines will result in the paper&rsquo;s rejection.
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Camera-Ready Submission</h2>
              <p>
                Authors of accepted papers are required to submit their
                camera-ready papers addressing reviewer feedback along with a
                rebuttal letter, electronically via the submission portal.
                Authors are given half a page to address reviewer feedback in
                their manuscript.
              </p>
              <p>Required camera-ready submissions include:</p>
              <ol>
                <li>
                  Final paper (8.5 pages maximum including figures/tables plus 2
                  pages for references)
                </li>
                <li>Rebuttal letter addressing reviewer feedback</li>
                <li>
                  Completed{" "}
                  <a
                    href="https://resource-cms.springernature.com/springer-cms/rest/v1/content/19790018/data/SNCS_ProceedingsPaper_LTP_ST_SN_Switzerland"
                    target="_blank"
                    rel="noopener"
                  >
                    LNCS License to Publish form
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Important Dates</h2>
              <DatesTimeline
                items={[
                  {
                    label: "Submission Portal Open",
                    value: "15 April 2026",
                    date: "2026-04-15",
                  },
                  {
                    label: "Full Paper Submission Deadline",
                    value: "15 July 2026",
                    date: "2026-07-15",
                  },
                  {
                    label: "Notification of Acceptance",
                    value: "15 August 2026",
                    date: "2026-08-15",
                  },
                  {
                    label: "Camera-ready Submission",
                    value: "03 September 2026",
                    date: "2026-09-03",
                  },
                  {
                    label: "Workshop Date",
                    value: "04 or 08 October 2026",
                    date: "2026-10-08",
                  },
                  // { label: "Workshop Proceedings Submission", value: "TBC" },
                ]}
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
