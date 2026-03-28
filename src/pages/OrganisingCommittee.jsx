import { useState, useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import ScrollReveal from '../components/ScrollReveal'
import { committeeSections, committee2025Sections } from '../data/committee'

function PastCommitteesModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <div
      className={`modal-overlay${open ? ' active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Past Committees"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal">
        <div className="modal__header">
          <h2>MIRASOL 2025 Organising Committee</h2>
          <button className="modal__close" aria-label="Close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal__body">
          {committee2025Sections.map((section, idx) => (
            <div key={idx} className="modal-section">
              <h3>{section.title}</h3>
              <div className="modal-members">
                {section.members.map((m, i) => (
                  <div key={i} className="modal-member">
                    <img src={m.photo} alt={m.name} />
                    <div className="modal-member__info">
                      <span className="modal-member__name">{m.name}</span>
                      {m.role && <span className="modal-member__role">{m.role}</span>}
                      <span className="modal-member__affiliation">{m.affiliation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function OrganisingCommittee() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <header className="page-header">
        <div className="page-header__container">
          <h1 className="page-header__title">Organising Committee</h1>
          <button className="btn-past-committees" onClick={() => setModalOpen(true)}>
            Past Committees
          </button>
        </div>
      </header>

      <ScrollReveal className="content-block">
        <div className="content-block__container"><div className="text-block"><div className="rte">
          <p>The organizing body consists of researchers, clinicians, and trainees who are local practitioners and knowledge brokers with lived experiences of learning, working, and caring for patients in resource constrained settings, in Africa, Asia, and other parts of the world.</p>
        </div></div></div>
      </ScrollReveal>

      {committeeSections.map((section, idx) => (
        <ScrollReveal key={idx} className="content-block">
          <div className="content-block__container"><div className="text-block"><div className="rte">
            <div className="committee-section">
              <h2>{section.title}</h2>
              <div className="members-grid">
                {section.members.map((m, i) => (
                  <div key={i} className="member-card">
                    <img className="photo" src={m.photo} alt={m.name} />
                    <span className="name">{m.name}</span>
                    {m.role && <span className="role">{m.role}</span>}
                    <span className="affiliation">{m.affiliation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div></div></div>
        </ScrollReveal>
      ))}

      <PastCommitteesModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
