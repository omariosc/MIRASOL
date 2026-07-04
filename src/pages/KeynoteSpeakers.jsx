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
            <img src={img('linkedin.webp')} alt="" width="18" height="18" />
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
