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
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>About NextGen Interchange</h2>
              <p>
                Welcome to the hub for pioneering research and entrepreneurial
                spirit, dedicated to fostering impactful solutions in Low- and
                Middle-Income Countries (LMICs). This platform connects early
                career researchers and dynamic startups with leading industry
                figures at MICCAI, creating a unique nexus for collaboration and
                innovation. Discover opportunities to showcase your
                groundbreaking ideas, develop scalable solutions tailored to
                local needs, and forge partnerships that translate cutting-edge
                research into tangible global impact. Join us in shaping a
                healthier, more equitable future by bringing vital innovations
                to the communities that need them most.
              </p>
              <p>
                Finalists will be invited to present live in front of a panel of
                Industry and Academic experts. It&rsquo;s your chance to make
                meaningful connections, get real-time feedback, and accelerate
                your idea&rsquo;s journey.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* How to Apply - 2 cards with full guidelines */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: "1.5rem" }}>
            <h2>How to Apply</h2>
            <p>Applicants must complete two required submissions:</p>
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
                <h3>Registered Report</h3>
              </div>
              <p>
                A concise 4-page document (plus 2-page reference allowance) that
                clearly explains your technical approach, what makes it
                innovative, and how it contributes to addressing an important
                issue in LMICs. We encourage clarity, brevity, and a strong
                emphasis on real-world applicability.
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
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <h3>3-Minute Pitch (3MP) Video</h3>
              </div>
              <p>
                A short pitch video telling the story of your project: the
                problem you are tackling, why it matters, how your method works,
                and what contribution you are making. Avoid technical jargon,
                focus on clarity, and aim to inspire a broad audience. You may
                include one static slide to support your message, but avoid
                dense text or complex visuals.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* What Your Video Must Cover - 2x2 cards */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: "1.5rem" }}>
            <h2>What Your Video Must Cover</h2>
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3>The Problem</h3>
              </div>
              <p>What is the real-world issue your research is tackling?</p>
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
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Why It Matters</h3>
              </div>
              <p>Why should people care? What&rsquo;s the broader impact?</p>
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
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <h3>Your Approach</h3>
              </div>
              <p>Describe your research method briefly and clearly.</p>
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
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Your Contribution</h3>
              </div>
              <p>
                What have you learned or built so far? What are the potential
                outcomes?
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Tips for Success - 2x2 cards */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: "1.5rem" }}>
            <h2>Tips for Success</h2>
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3>Tell a Story</h3>
              </div>
              <p>
                Take the audience on a journey from problem to solution. A
                compelling narrative makes your idea memorable.
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
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </div>
                <h3>Keep It Simple</h3>
              </div>
              <p>
                Use analogies and relatable examples. Explain concepts as if
                speaking to an intelligent non-expert. Avoid dense visuals and
                jargon.
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
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>Show Your Passion</h3>
              </div>
              <p>
                Enthusiasm is contagious and helps your message stick. Let your
                genuine interest in the problem shine through.
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
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                </div>
                <h3>Practice</h3>
              </div>
              <p>
                Record multiple takes, test with friends or colleagues, and time
                yourself carefully. Preparation makes perfect.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Submission Format & Resources */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Submission Format &amp; Resources</h2>
              <ul>
                <li>
                  <strong>Registered Report:</strong> Submit your 4-page (2-page
                  reference) report to the MIRASOL Interchange Track via the
                  OpenReview portal.
                </li>
                <li>
                  <strong>3MP Video:</strong> Enter the Google Drive link to
                  your 3MP in OpenReview when you submit your registered report.
                  Make sure the link is accessible to anyone with the link (view
                  permission enabled).
                </li>
                <li>
                  <strong>Video length:</strong> Maximum 3 minutes
                </li>
                <li>
                  <strong>File format:</strong> MP4 preferred
                </li>
                <li>
                  <strong>Slide:</strong> One static slide only (no animation).
                  Keep it simple, legible, and visual &mdash; avoid dense text
                  or complicated figures.
                </li>
              </ul>
              <p>
                See examples of 3MT presentations:{" "}
                <a
                  href="https://threeminutethesis.uq.edu.au/watch-3mt"
                  target="_blank"
                  rel="noopener"
                >
                  3MT Thesis Presentation
                </a>{" "}
                |{" "}
                <a
                  href="https://support.microsoft.com/en-us/office/record-a-presentation-2570dff5-f81c-40bc-b404-e04e95d8a8e6"
                  target="_blank"
                  rel="noopener"
                >
                  Tips on recording your presentation in PowerPoint
                </a>
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Evaluation Criteria */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Evaluation Criteria</h2>
              <p>
                All submissions will be evaluated according to the following
                criteria.{" "}
                <strong style={{ color: "var(--theme-primary)" }}>
                  Ideas must address local LMIC needs to pass the Locality
                  requirement.
                </strong>
              </p>
            </div>
            <div className="eval-criteria">
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
                    <div
                      className="eval-legend-item__bar"
                      style={{ background: "#d97706" }}
                    />
                    <div className="eval-legend-item__info">
                      <span className="eval-legend-item__name">Innovation</span>
                      <span
                        className="eval-legend-item__pct"
                        style={{ color: "#d97706" }}
                      >
                        40%
                      </span>
                    </div>
                  </div>
                  <div className="eval-legend-item">
                    <div
                      className="eval-legend-item__bar"
                      style={{ background: "#0284c7" }}
                    />
                    <div className="eval-legend-item__info">
                      <span className="eval-legend-item__name">
                        Feasibility
                      </span>
                      <span
                        className="eval-legend-item__pct"
                        style={{ color: "#0284c7" }}
                      >
                        30%
                      </span>
                    </div>
                  </div>
                  <div className="eval-legend-item">
                    <div
                      className="eval-legend-item__bar"
                      style={{ background: "#7c3aed" }}
                    />
                    <div className="eval-legend-item__info">
                      <span className="eval-legend-item__name">
                        Global Scalability
                      </span>
                      <span
                        className="eval-legend-item__pct"
                        style={{ color: "#7c3aed" }}
                      >
                        30%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Key Dates */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Key Dates</h2>
            </div>
            <DatesTimeline
              items={[
                {
                  label: "Submission Deadline",
                  value: "15 July 2026",
                  date: "2026-07-15",
                },
                {
                  label: "Acceptance Notification",
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
                  value: "4 or 8 October 2026",
                  date: "2026-10-08",
                },
                // { label: "Workshop Proceedings Submission", value: "TBC" },
              ]}
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Jury Recruitment */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Interchange Jury Recruitment</h2>
              <p>
                Are you a researcher, academic, startup founder, or industry
                leader at the intersection of AI, healthcare, and innovation? Do
                you value mentorship and supporting the next generation of
                global innovators? We invite emerging leaders and changemakers
                like you to join us as Interchange Juries at MIRASOL 2026.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <SubmissionCards />
    </>
  );
}
