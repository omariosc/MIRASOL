import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { img } from "../utils";

const keywordsRow1 = [
  "Machine Learning",
  "Medical Imaging",
  "Health Equity",
  "Low-and-Middle-Income Countries",
  "MRI",
  "PET",
];
const keywordsRow2 = ["CT", "US", "EEG", "ECG", "X-ray", "Low-Resource", "Middle-East", "South-Asia", "Africa", "Latin America"];

export default function Home() {
  return (
    <>
      {/* Desktop hero */}
      <section className="hero hero--desktop">
        <div className="hero__bg">
          <img src={img("france.webp")} alt="Strasbourg, France" />
        </div>
        <div className="hero__content">
          <div className="hero__logos">
            <div className="hero__logo-left">
              <img
                src={img("miccai-2026-primary.webp")}
                alt="MICCAI 2026 - Strasbourg Convention Center, France"
              />
            </div>
            <div className="hero__logo-center">
              <img src={img("sponsor-1.webp")} alt="RISE MICCAI" />
            </div>
            <div className="hero__logo-right">
              <img src={img("logo-mirasol.webp")} alt="MIRASOL Workshop" />
            </div>
          </div>
          <div className="hero__text">
            <h1 className="hero__title">
              Building and Sustaining Efficient Technologies for Medical
              Imaging in Resource-Constrained Settings
            </h1>
            <p className="hero__date">
              27 September or 01 October 2026 &mdash; Strasbourg Convention Center, France
            </p>
          </div>
        </div>
      </section>
      {/* Mobile hero — single image, no overlays */}
      <div className="hero-mobile">
        <img src={img("hero-mobile.webp")} alt="MIRASOL Workshop at MICCAI 2026" />
      </div>

      {/* Keywords */}
      <div className="keywords-section">
        <div className="content-block__container">
          <div className="keywords-row">
            {keywordsRow1.map((kw) => (
              <span key={kw} className="keyword-pill">
                {kw}
              </span>
            ))}
          </div>
          <div className="keywords-row">
            {keywordsRow2.map((kw) => (
              <span key={kw} className="keyword-pill">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Welcome */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="-large -image-right -align-center text-image-block">
            <div className="text-image-block__image-wrapper">
              <div
                className="content-block-image"
                style={{ "--aspect-ratio": 1.5 }}
              >
                <img
                  src={img("welcome-graphic.webp")}
                  alt=""
                  className="content-block-image__image"
                  fetchpriority="high"
                />
              </div>
            </div>
            <div className="text-image-block__text-wrapper">
              <div className="rte">
                <h2>Welcome</h2>
                <p>
                  There has been considerable excitement about the extraordinary
                  opportunities that machine learning (ML) may offer in the
                  healthcare of tomorrow. Given the potential of ML technology
                  in facilitating the quantification of large and complex
                  datasets, medical imaging has witnessed rapid and
                  revolutionary developments. However, a limitation of current
                  ML developments for medical imaging is that they have
                  overwhelmingly and almost entirely targeted imaging
                  applications in rich-resourced and high-income settings. Given
                  the higher level of disease mortalities in low-
                  and-middle-income countries (LMICs) and the growing incidence
                  of the leading causes of premature death in these regions, it
                  is important to promote and accelerate the development of
                  trustworthy and accessible ML solutions for medical imaging in
                  resource constrained settings (RCS), particularly in LMICs, to
                  advance global healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Aim */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h3>Aim:</h3>
              <p>
                The 3rd MIRASOL workshop will connect researchers, medical experts,
                policy makers, regulators, and industry partners from around the
                world who are working on translational ML solutions for
                real-world medical imaging in RCS, with a focus on
                underrepresented communities in the Middle East. This workshop
                builds on the successful{" "}
                <a
                  href="https://event.fourwaves.com/miccaiafrica"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>
                    <em>MICCAI Meets Africa Workshop</em>
                  </strong>
                </a>
                , organized in 2024 for the Morocco meeting and expanded as a{" "}
                <a
                  href="https://event.fourwaves.com/mirasol"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>
                    <em>MIRASOL Workshop</em>
                  </strong>
                </a>{" "}
                in 2025 for the South Korea meeting. The 2026 Workshop, partners
                with{" "}
                <a
                  href="https://rise-miccai.org/"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>
                    <em>RISE-MICCAI</em>
                  </strong>
                </a>
                , a vibrant community of 1,400 LMIC members (40% women, and 90%
                from diverse ethnic backgrounds), who up till now had no
                dedicated workshop tailored to their needs. This year&rsquo;s
                workshop will fill this gap, as well as continue to probe
                medical imaging challenges in RCS, including but not limited to,
                infrastructure, personnel, and funding resources.
              </p>
              <p>
                Research and ML methods on optimization of imaging systems
                (e.g., accelerated imaging, low-resolution image enhancement,
                denoising, missing sequences), improvement in human resources
                (e.g., rapid diagnosis, reporting), and policy efforts for
                translation of ML from concept to clinic in RCS will be
                highlighted. The workshop will foster ML imaging innovations
                that address the general challenge of fewer datasets in RCS and
                inspire the wider MICCAI community to develop methods in a
                sustainability conscious, resource-efficient, and cost-effective
                manner (do more with little).
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Focus Areas */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: "1.5rem" }}>
            <h2>Workshop Focus Areas</h2>
            <p>
              We are looking for papers that will be presented as
              contributed talks. Specifically, we encourage contributions that
              highlight issues related to:
            </p>
          </div>
          <div className="focus-cards">
            <div className="focus-card -watermark">
              <div className="focus-card__number">1</div>
              <h3>Machine Learning for Medical Imaging</h3>
              <p>
                Theoretical and practical advances in machine learning
                algorithms and methods for medical imaging tailored for
                monitoring disease progression in settings with data scarcity,
                imbalanced representations, and limited computational resources.
              </p>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">2</div>
              <h3>Clinical Outcome Prediction</h3>
              <p>
                Clinical outcome prediction and forecasting methods in
                multimodal healthcare data.
              </p>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">3</div>
              <h3>Societal &amp; Policy Impact</h3>
              <p>
                Societal and policy impacts of healthcare ML solutions in the
                global South focused on insights obtained via pilot studies,
                qualitative research, and human-in-the-loop settings.
              </p>
            </div>
            <div className="focus-card -watermark">
              <div className="focus-card__number">4</div>
              <h3>Sustainability and Capacity Building</h3>
              <p>
                Approaches to sustainably build and rapidly scale capacity for ML
                innovations in health in RCS, particularly in LMICs.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link className="action-element -primary" to="/call-for-papers">
              See Call for Papers
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Important Dates & Registration */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="info-cards">
            <div className="info-card">
              <svg
                className="info-card__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <h2>Important Dates</h2>
              <p>
                <strong>Submission Portal Open:</strong> 1 May 2026
              </p>
              <p>
                <strong>Full Paper Submission Deadline:</strong> 15 July 2026
              </p>
              <p>
                <strong>Notification of Acceptance:</strong> 15 August 2026
              </p>
              <p>
                <strong>Camera-ready Submission:</strong> 03 September 2026
              </p>
              <p>
                <strong>Workshop Date:</strong> 27 September or 01 October 2026
              </p>
              {/* <p>
                <strong>Proceedings Submission:</strong> TBC
              </p> */}
            </div>
            <div className="info-card">
              <svg
                className="info-card__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              <h2>Registration</h2>
              <p>
                All registered attendees of the MICCAI 2026 Conference are
                welcome to participate in this workshop.
              </p>
              <p>
                Please note that this workshop is a satellite event and an{" "}
                <strong>additional registration fee</strong> is required to
                attend MICCAI satellite events, including this workshop.
              </p>
              <p>
                Registration details will be announced on the{" "}
                <a
                  href="https://conferences.miccai.org/2026/"
                  target="_blank"
                  rel="noopener"
                >
                  MICCAI 2026 website
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Organizing Committee */}
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="text-block">
            <div className="rte">
              <h2>Organizing Committee</h2>
              <p>
                We are a collaborative team of individuals from diverse
                institutions in academia and industry from around the world, as
                well as different career stages and gender representation. The
                organizers are long time and new MICCAI members including
                trainees from LMICs. The <strong>Next-Gen</strong> (trainees)
                committee members will gain first-hand knowledge, experience,
                and mentorship in conference organizations to continue running
                MIRASOL in the future or organize other satellite events at
                MICCAI.
              </p>
              <p>
                See our{" "}
                <Link to="/organising-committee">
                  <strong>Organizing Committee</strong>
                </Link>{" "}
                page to learn more about us.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Past Workshop Photos */}
      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.25rem' }}><h2>Past Workshops</h2></div>
          <div className="focus-cards">
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden' }}>
              <img
                src={img("mirasol-2025.webp")}
                alt="MIRASOL 2025 — Daejeon, South Korea"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            <div style={{ borderRadius: '0.75rem', overflow: 'hidden' }}>
              <img
                src={img("divider-sponsors.webp")}
                alt="MIRASOL 2024 — Marrakesh, Morocco"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sponsors */}
      <ScrollReveal className="sponsors-section">
        <div className="content-block__container">
          <h2>Sponsors &amp; Partners</h2>
          <div className="logos-block__list">
            {/* <a
              href="https://www.cameramriafrica.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="logos-block__item"
            >
              <img src={img("logo-camera.png")} alt="CAMERA" />
            </a> */}
            <a
              href="https://miccai.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="logos-block__item"
            >
              <img src={img("logo-miccai.webp")} alt="MICCAI Society" loading="lazy" />
            </a>
            <a
              href="https://rise-miccai.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="logos-block__item logos-block__item--large"
            >
              <img src={img("sponsor-1.webp")} alt="RISE MICCAI" loading="lazy" />
            </a>
            <a
              href="https://camera.minciencias.gov.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="logos-block__item logos-block__item--large"
            >
              <img src={img("sponsor-2.webp")} alt="CAMERA" loading="lazy" />
            </a>
            {/* <div className="logos-block__item">
              <img src={img("sponsor-3.png")} alt="Fondation Pierre Fabre" />
            </div>
            <div className="logos-block__item">
              <img src={img("sponsor-4.png")} alt="ISR" />
            </div>
            <div className="logos-block__item">
              <img src={img("sponsor-5.png")} alt="Universita di Catania" />
            </div>
            <div className="logos-block__item">
              <img src={img("sponsor-6.png")} alt="Frontiers" />
            </div> */}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
