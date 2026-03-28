import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { speakers } from '../data/speakers'
import { img } from '../utils'

export default function KeynoteSpeakers() {
  return (
    <>
      <PageHeader title="Keynote Speakers" />
      <ScrollReveal className="content-block">
        <div className="content-block__container content-block__container--notice" style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}>
          <div className="notice" style={{ margin: 0 }}><strong>Note:</strong> Keynote speakers for MIRASOL at MICCAI 2026 will be announced soon. Below are our distinguished speakers from the 2025 edition.</div>
        </div>
      </ScrollReveal>
      <ScrollReveal className="content-block">
        <div className="content-block__container">
          <div className="speakers-grid">
            {speakers.map((s, i) => (
              <div key={i} className="speaker-card">
                <img src={img(s.photo)} alt={s.name} />
                <div className="speaker-info">
                  <div className="speaker-name">{s.name}</div>
                  <div className="speaker-title">{s.title}</div>
                  <div className="speaker-affiliation">{s.affiliation}</div>
                  <p className="speaker-bio">{s.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
