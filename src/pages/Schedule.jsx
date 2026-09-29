import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { scheduleItems, sections, filterCategories, LOCATION, ROOM, TIMEZONE } from '../data/schedule'
import { posters } from '../data/posters'
import { img } from '../utils'

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: TIMEZONE })
}

function timeRange(item) {
  if (item.startTime === item.endTime) return formatTime(item.startTime)
  return `${formatTime(item.startTime)} – ${formatTime(item.endTime)}`
}

export default function Schedule() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = scheduleItems.filter(item => {
    const matchFilter = filter === 'all' || item.category === filter
    const q = search.toLowerCase()
    const matchSearch = !q || item.title.toLowerCase().includes(q) || (item.speaker||'').toLowerCase().includes(q)
      || (item.details||[]).some(d => d.toLowerCase().includes(q))
    return matchFilter && matchSearch
  })

  const visibleSections = sections.filter(s => filtered.some(i => i.section === s.id))

  const downloadPDF = async () => {
    // ASCII-safe text for jsPDF's built-in fonts (em/en dashes and curly quotes)
    const ascii = (s) => String(s)
      .replace(/[–—]/g, '-')
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')

    // Compact 24-hour times for the printed agenda (matches the official programme)
    const fmt24 = (iso) => new Date(iso).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: TIMEZONE })
    const range24 = (item) => item.startTime === item.endTime ? fmt24(item.startTime) : `${fmt24(item.startTime)} - ${fmt24(item.endTime)}`

    const { jsPDF } = await import('jspdf')
    const autoTable = (await import('jspdf-autotable')).default

    const doc = new jsPDF({ unit: 'pt', format: 'a4' })
    const margin = 40

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.text('MIRASOL Workshop - MICCAI 2026', margin, 48)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    doc.text('2026 Workshop Programme Archive', margin, 66)
    doc.setFontSize(9.5)
    doc.setTextColor(90)
    doc.text(ascii('27 September 2026   |   ' + LOCATION), margin, 82)
    doc.text('All times are in Central European Summer Time (CEST, UTC+2).', margin, 95)
    doc.setTextColor(0)

    const navy = [31, 78, 121]
    const body = []
    sections.forEach((sec) => {
      body.push([{
        content: ascii(sec.chairs ? `${sec.title}   |   Chairs: ${sec.chairs}` : sec.title),
        colSpan: 3,
        styles: { fillColor: navy, textColor: 255, fontStyle: 'bold', fontSize: 10 },
      }])
      let lastGroup = null
      scheduleItems.filter((i) => i.section === sec.id).forEach((item) => {
        if (item.group && item.group !== lastGroup) {
          lastGroup = item.group
          const parts = [item.group]
          if (item.groupSubtitle) parts.push(item.groupSubtitle)
          if (item.groupChairs) parts.push(`Chairs: ${item.groupChairs}`)
          body.push([{
            content: ascii(parts.join('   |   ')),
            colSpan: 3,
            styles: { fillColor: [235, 238, 244], textColor: navy, fontStyle: 'bold', fontSize: 9 },
          }])
        }
        let session = item.category === 'keynote' ? `Keynote: ${item.title}` : item.title
        if (item.details && item.details.length) {
          session += '\n' + item.details.map((d) => '- ' + d).join('\n')
        }
        body.push([range24(item), ascii(session), ascii(item.speaker || '')])
      })
    })

    autoTable(doc, {
      startY: 108,
      head: [['Time', 'Session', 'Speaker / Presenter']],
      body,
      margin: { left: margin, right: margin },
      styles: { fontSize: 9, cellPadding: 4, valign: 'top', overflow: 'linebreak', lineColor: [220, 224, 230], lineWidth: 0.5 },
      headStyles: { fillColor: navy, textColor: 255, fontStyle: 'bold' },
      columnStyles: { 0: { cellWidth: 80 }, 2: { cellWidth: 150 } },
    })

    // Poster presentations on a fresh page
    if (posters.length) {
      doc.addPage()
      doc.setFont('helvetica', 'bold'); doc.setFontSize(14)
      doc.text('Poster Presentations', margin, 48)
      doc.setFont('helvetica', 'normal'); doc.setFontSize(9.5); doc.setTextColor(90)
      doc.text(ascii(`${posters.length} posters  |  MIRASOL Poster Session & Networking (17:05 - 17:55)  |  ${ROOM}`), margin, 64)
      doc.setTextColor(0)
      autoTable(doc, {
        startY: 76,
        head: [['No.', 'ID', 'Title', 'Presenting Author & Affiliation']],
        body: posters.map((p) => [
          String(p.number),
          String(p.paperId),
          ascii(p.ambassador ? `${p.title}  [Ambassador Poster]` : p.title),
          ascii(p.presenter),
        ]),
        margin: { left: margin, right: margin },
        styles: { fontSize: 8, cellPadding: 3, valign: 'top', overflow: 'linebreak', lineColor: [220, 224, 230], lineWidth: 0.5 },
        headStyles: { fillColor: navy, textColor: 255, fontStyle: 'bold' },
        columnStyles: { 0: { cellWidth: 28, halign: 'center' }, 1: { cellWidth: 30 }, 3: { cellWidth: 150 } },
      })
    }

    doc.save('mirasol-workshop-2026-agenda.pdf')
  }

  return (
    <>
      <PageHeader title="Programme Archive" />

      {/* Schedule Intro */}
      <div className="content-block">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>2026 Workshop Programme</h2>
            <p>This programme is preserved as an archive of the MIRASOL–RISE session held on 27 September 2026.</p>
            <p>All times are in Central European Summer Time (CEST, UTC+2).</p>
            <p>The workshop took place at the <strong>Strasbourg Convention Center, France</strong>. Room: <strong>{ROOM}</strong>.</p>
            <p>The MIRASOL poster session used the wall space around the room.</p>
          </div></div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="content-block">
        <div className="content-block__container" style={{paddingTop:0}}>
          <div className="schedule-toolbar">
            <div className="schedule-search">
              <svg className="schedule-search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" className="schedule-search__input" placeholder="Search sessions, speakers, topics..." value={search} onChange={e=>setSearch(e.target.value)} />
              {search && <button className="schedule-search__clear" onClick={()=>setSearch('')}>&times;</button>}
            </div>
            <div className="schedule-filters">
              {filterCategories.map(c => (
                <button key={c.key} className={`schedule-filter${filter===c.key?' active':''}`} onClick={()=>setFilter(c.key)}>{c.label}</button>
              ))}
            </div>
            <div className="schedule-actions">
              <button className="schedule-calendar-btn" onClick={downloadPDF}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download PDF
              </button>
            </div>
          </div>

          {(filter !== 'all' || search) && (
            <div className="schedule-results-count">{filtered.length} of {scheduleItems.length} sessions</div>
          )}

          {filtered.length === 0 && (
            <div className="schedule-no-results">
              <p>No sessions match your search or filter. <a href="#" onClick={e=>{e.preventDefault();setSearch('');setFilter('all')}}>Clear all filters</a></p>
            </div>
          )}
        </div>
      </div>

      {/* Schedule Timeline */}
      <div className="content-block" id="scheduleContainer">
        <div className="content-block__container" style={{paddingTop:0}}>
          {visibleSections.map(sec => (
            <div key={sec.id} className="schedule-section">
              <h3 className="schedule-section__title">{sec.title}</h3>
              {sec.chairs && (
                <p className="schedule-section__chairs"><span>Chairs</span> {sec.chairs}</p>
              )}
              <div className="schedule-timeline">
                {(() => {
                  let lastGroup = null
                  return filtered.filter(i => i.section === sec.id).map(item => {
                    const showGroup = item.group && item.group !== lastGroup
                    if (item.group) lastGroup = item.group
                    return (
                      <div key={item.id}>
                        {showGroup && (
                          <div className="schedule-group">
                            <h4 className="schedule-group__title">{item.group}</h4>
                            {item.groupSubtitle && <p className="schedule-group__subtitle">{item.groupSubtitle}</p>}
                            {item.groupChairs && <p className="schedule-group__chairs"><span>Chairs</span> {item.groupChairs}</p>}
                          </div>
                        )}
                        <div className={`schedule-tl-item${item.category==='break'?' -break':''}`}>
                          <div className="schedule-tl-dot" />
                          <div className="schedule-tl-card">
                            <div className="schedule-tl-card__main">
                              <div className="schedule-tl-time">{timeRange(item)}</div>
                              <h4 className={item.category==='break'?'schedule-break-title':''}>{item.title}</h4>
                              {item.speaker && (
                                <p className="presenter">
                                  {item.speaker}
                                  {item.speakerLinkedin && (
                                    <a
                                      className="presenter-linkedin"
                                      href={item.speakerLinkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={`${item.speaker} on LinkedIn`}
                                    >
                                      <img src={img('linkedin.webp')} alt="LinkedIn" width="16" height="16" />
                                    </a>
                                  )}
                                </p>
                              )}
                              {item.details && (
                                <ul className="schedule-tl-details">
                                  {item.details.map((d, i) => <li key={i}>{d}</li>)}
                                </ul>
                              )}
                              <div className="schedule-tl-tags">
                                {item.label && <span className={`session-label ${item.labelClass||''}`}>{item.label}</span>}
                                {item.paperId && <span className="schedule-tl-id">ID {item.paperId}</span>}
                              </div>
                            </div>
                            {item.speakerPhoto && (
                              <img className="schedule-tl-avatar" src={img(item.speakerPhoto)} alt={item.speaker} loading="lazy" />
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })
                })()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Poster Presentations */}
      <div className="content-block -alt" id="posters">
        <div className="content-block__container">
          <div className="rte" style={{ marginBottom: '1.25rem' }}>
            <h2>Poster Presentations</h2>
            <p>
              {posters.length} posters were presented during the <strong>MIRASOL Poster Session &amp; Networking</strong> (17:05&ndash;17:55) in <strong>{ROOM}</strong>. The list is preserved here as part of the workshop archive.
            </p>
          </div>
          <div className="poster-table-wrap">
            <table className="poster-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Paper&nbsp;ID</th>
                  <th>Title</th>
                  <th>Presenting Author &amp; Affiliation</th>
                </tr>
              </thead>
              <tbody>
                {posters.map((p) => (
                  <tr key={p.number}>
                    <td className="poster-table__num">{p.number}</td>
                    <td className="poster-table__id">{p.paperId}</td>
                    <td>
                      {p.title}
                      {p.ambassador && (
                        <span className="poster-ambassador-badge">Ambassador Poster{p.ambassador ? ` — ${p.ambassador}` : ''}</span>
                      )}
                    </td>
                    <td>{p.presenter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}
