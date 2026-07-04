import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { speakers } from '../data/speakers'
import { img } from '../utils'

function SpeakerCard({ s }) {
  return (
    <div className="speaker-card">
      <img src={img(s.photo)} alt={s.name} loading="lazy" />
      <div className="speaker-info">
        <div className="speaker-name">{s.name}</div>
        {s.talkTitle && (
          <div className="speaker-title">&ldquo;{s.talkTitle}&rdquo;</div>
        )}
        {s.title && <div className="speaker-title">{s.title}</div>}
        <div className="speaker-affiliation">{s.affiliation}</div>
        {s.bio && <p className="speaker-bio">{s.bio}</p>}
        {s.linkedin && (
          <a
            className="speaker-linkedin"
            href={s.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.4 9.5h5.16V21H2.4V9.5zm7.63 0h4.95v1.57h.07c.69-1.24 2.38-2.55 4.9-2.55 5.24 0 6.2 3.3 6.2 7.59V21h-5.16v-4.35c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V21H10.03V9.5z" />
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}

export default function KeynoteSpeakers() {
  const keynote2026 = speakers.filter((s) => s.edition === 2026)
  const speakers2025 = speakers.filter((s) => s.edition === 2025)

  return (
    <>
      <PageHeader title="Keynote Speakers" />

      {keynote2026.length > 0 && (
        <ScrollReveal className="content-block">
          <div className="content-block__container">
            <div className="rte" style={{ marginBottom: '1.25rem' }}>
              <h2>MIRASOL 2026 Keynote</h2>
            </div>
            <div className="speakers-grid">
              {keynote2026.map((s, i) => (
                <SpeakerCard key={i} s={s} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal className="content-block -alt">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.25rem' }}>
            <h2>2025 Keynote Speakers</h2>
            <p>Our distinguished keynote speakers from the 2025 edition.</p>
          </div>
          <div className="speakers-grid">
            {speakers2025.map((s, i) => (
              <SpeakerCard key={i} s={s} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
