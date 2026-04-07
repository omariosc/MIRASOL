import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import DatesTimeline from "../components/DatesTimeline";

export default function CallForPapers() {
  return (
    <>
      <PageHeader title="Call for Papers" />

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: "1.5rem" }}>
            <h2>Workshop Core Focus Areas</h2>
            <p>
              The workshop welcomes conference paper submissions in the
              following core areas of focus:
            </p>
          </div>
          <div className="focus-cards">
            <div className="focus-card -watermark">
              <div className="focus-card__number">1</div>
              <h3>Methodological Advances for Medical Imaging in RCS</h3>
              <p>
                Theoretical and practical ML algorithms for overcoming
                healthcare barriers in RCS
              </p>
              <ul>
                <li>
                  Address data scarcity, poor image quality, and data sharing
                  challenges.
                </li>
                <li>
                  Enhance image quality with innovative techniques for low-cost
                  devices.
                </li>
                <li>
                  Develop data-efficient ML models suited for RCS sparse data
                  environments.
                </li>
                <li>
                  Implement robust strategies for handling missing and noisy
                  data.
                </li>
                <li>
                  Apply cost-effective transfer learning and domain adaptation.
                </li>
              </ul>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">2</div>
              <h3>Resource-efficient Clinical Outcome Prediction</h3>
              <p>
                Evaluation or validation of ML methods for clinical outcome
                prediction in RCS
              </p>
              <ul>
                <li>
                  Forecasting and predictive analytics that leverage imaging and
                  multimodal healthcare data.
                </li>
                <li>
                  Advance early disease detection and monitoring progression
                  with minimal resources.
                </li>
                <li>
                  Utilise affordable X-rays, ultrasound, and smartphone
                  diagnostics.
                </li>
                <li>
                  Deploy biosignals like EEG and ECG for cost-effective
                  diagnoses.
                </li>
                <li>
                  Propose low-cost image-guided therapies and
                  computer-integrated interventions.
                </li>
              </ul>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">3</div>
              <h3>Societal &amp; Policy Impact in RCS</h3>
              <ul>
                <li>
                  Evaluate ML&rsquo;s impact on healthcare access and policies
                  in RCS.
                </li>
                <li>
                  Accelerate the adoption of ML innovations for sustainable
                  healthcare improvements.
                </li>
                <li>
                  Describe ML impacts in RCS obtained from pilot studies,
                  qualitative research or human-in-the-loop settings.
                </li>
                <li>
                  Develop frameworks to manage data scarcity and optimise
                  computational resources.
                </li>
              </ul>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">4</div>
              <h3>Sustainability and Capacity Building</h3>
              <ul>
                <li>
                  Approaches to build, accelerate and sustain ML capacity and
                  health innovations in LMICs.
                </li>
                <li>
                  Education and training approaches to close ML knowledge and
                  skills gap in RCS.
                </li>
                <li>
                  ML approaches to advance healthcare operational efficiency and
                  speed.
                </li>
                <li>
                  Focus on AI model bias mitigation and model compression for
                  equity and resource efficiency.
                </li>
                <li>
                  Use of agentic AI solutions to bridge skills gaps and improve
                  imaging capacity in RCS.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Awards and Grants</h2>
              <p>Two awards will be presented at the workshop:</p>
            </div>
            <div className="awards-grid">
              <div className="award-card">
                <div className="amount">$500</div>
                <div className="label">Best Paper Award</div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--gray-500)",
                    marginTop: "0.5rem",
                  }}
                >
                  For the highest quality paper, selected based on the review
                  results.
                </p>
              </div>
              <div className="award-card">
                <div className="amount">$500</div>
                <div className="label">Impact Award</div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--gray-500)",
                    marginTop: "0.5rem",
                  }}
                >
                  Chosen by attendees, recognizing a contributed paper presented
                  at the workshop that best captures the workshop focus with
                  demonstrated impact in RCS.
                </p>
              </div>
            </div>
            <div className="rte">
              <h3>Travel Grants</h3>
              <p>
                To provide an opportunity for exceptional LMICs researchers from
                under-represented regions to participate in this workshop and
                contribute their research, we are actively seeking funding to
                supplement MICCAI registration costs, provide travel stipends
                and best paper awards. Our sponsorship committee comprising
                members who have a track record in securing funding to support
                participation of underrepresented groups at MICCAI will continue
                this outreach effort to ensure that under-represented groups are
                able to share and learn from this workshop and other events at
                MICCAI.
              </p>
              <p>
                <strong>How to apply: TBA</strong>
              </p>
              {/* <ol>
                <li>
                  Complete the{" "}
                  <a
                    href="https://conferences.miccai.org/2026/"
                    target="_blank"
                    rel="noopener"
                  >
                    MICCAI Travel Award application
                  </a>{" "}
                  on the MICCAI 2026 website.
                </li>
                <li>
                  During paper submission, select that you have applied for the
                  travel award.
                </li>
              </ol> */}
            </div>
            <div className="rte" style={{ marginTop: "1.5rem" }}>
              <h3>Computing Resource Support</h3>
              <p>
                To encourage paper submission from researchers who live and work
                in LMICs, we are providing access to computing resources to
                those with demonstrated need, through the generous contribution
                of Digital Research Alliance of Canada. Complete a request form
                using the link below to request access. Eligible researchers
                will be contacted with access details within two weeks on a
                first-come first-serve basis. Resource is available from May 1st
                to August 15th 2026.
              </p>
              <p>
                <strong>How to apply:</strong>
              </p>
              <ol>
                <li>
                   <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScM3GNtpETWlRiaB9GBGUXIrVl7zLerYARPYHCaavXcQDhgFA/viewform"
                    target="_blank"
                    rel="noopener"
                  >
                    Submission Form
                  </a>
                </li>
                {/*
                <li>
                  Instructions:{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScM3GNtpETWlRiaB9GBGUXIrVl7zLerYARPYHCaavXcQDhgFA/viewform"
                    target="_blank"
                    rel="noopener"
                  >
                    Computing Resource Support Guidelines
                  </a>
                </li> */}
                <li>
                  During MIRASOL paper submission, select that you have applied
                  for computing resource support.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Important Dates</h2>
            </div>
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
              ]}
            />
            <div className="notice">
              <strong>Note:</strong> All dates are for 2026 and will be
              announced soon. All deadlines are at 23:59 Anywhere on Earth
              (AoE).
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Submission Guidelines</h2>
              <p>
                Submissions are invited as long papers (
                <strong>8 pages of content plus 2 pages for references</strong>)
                in PDF format using either the LaTeX or Word{" "}
                <a
                  href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                  target="_blank"
                  rel="noopener"
                >
                  Springer Computer Science Proceedings template
                </a>
                . Authors must adhere strictly to the workshop paper format,
                including the use of the provided template and the recommended
                paper structure (see submission portal for details).
              </p>
              <p>
                The MIRASOL Workshop follows a{" "}
                <strong>double-blind review process</strong>. All submissions
                must be <strong>completely anonymised</strong> &mdash; authors
                must remove any identifying information, including names,
                affiliations, and self-citations that could reveal authorship.
                Each submission will be reviewed by at least{" "}
                <strong>two external reviewers</strong> to assess its
                suitability for inclusion in the workshop program.
              </p>
              <div className="notice">
                <strong>Important:</strong> Modifications to the template are
                not allowed, and failure to comply with the formatting
                guidelines will result in rejection.
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block -inline">
            <div className="rte">
              <p>
                Ready to submit? View the full submission portal, templates, and
                paper structure.
              </p>
            </div>
            <Link className="action-element -primary" to="/how-to-submit">
              How to Submit
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Past Workshops */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="rte">
            <h2>Past MIRASOL Workshops</h2>
            <p>
              To read papers from previous MIRASOL Workshops, see links to
              conference proceedings below:
            </p>
          </div>
          <div className="focus-cards">
            <a
              href="https://link.springer.com/book/9783032136534"
              target="_blank"
              rel="noopener"
              className="focus-card -icon-inline -link"
            >
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
                <h3>Daejeon, South Korea 2025</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="focus-card__external"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>
            <a
              href="https://doi.org/10.1007/978-3-031-79103-1"
              target="_blank"
              rel="noopener"
              className="focus-card -icon-inline -link"
            >
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
                <h3>Marrakesh, Morocco 2024</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="focus-card__external"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
