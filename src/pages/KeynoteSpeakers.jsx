import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { speakers } from '../data/speakers'
import { img } from '../utils'

// Rich 3rd-person bios (with inline links) for confirmed 2026 keynotes,
// keyed by speaker name.
const bios2026 = {
  'François Rousseau': (
    <>
      François Rousseau is a Professor at{' '}
      <a href="https://www.imt-atlantique.fr" target="_blank" rel="noopener noreferrer">
        IMT Atlantique
      </a>{' '}
      and a researcher at the{' '}
      <a href="http://latim.univ-brest.fr" target="_blank" rel="noopener noreferrer">
        LaTIM
      </a>{' '}
      (Laboratoire de Traitement de l&rsquo;Information Médicale) in Brest,
      France. His{' '}
      <a href="https://rousseau.github.io/" target="_blank" rel="noopener noreferrer">
        research
      </a>{' '}
      develops computational methods and machine learning for medical image
      analysis, with applications to the neuro-musculoskeletal system and a
      particular focus on early brain development.
    </>
  ),
}

function SpeakerCard({ s, bio }) {
  const bioContent = bio || s.bio
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
        {bioContent && <p className="speaker-bio">{bioContent}</p>}
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
                <SpeakerCard key={i} s={s} bio={bios2026[s.name]} />
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
