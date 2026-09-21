import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Countdown from '../components/Countdown'
import { scheduleItems, sections, filterCategories, EVENT_DATE, LOCATION, ROOM, TIMEZONE } from '../data/schedule'
import { img } from '../utils'

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: TIMEZONE })
}

function timeRange(item) {
  if (item.startTime === item.endTime) return formatTime(item.startTime)
  return `${formatTime(item.startTime)} – ${formatTime(item.endTime)}`
}

const esc = (s) => String(s).replace(/[\\;,]/g, (c) => '\\' + c)

function buildICS() {
  const lines = [
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//MIRASOL Workshop//Schedule//EN',
    'CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:MIRASOL Workshop 2026','X-WR-TIMEZONE:Europe/Paris',
  ]
  scheduleItems
    .filter(i => i.category !== 'break' && i.startTime !== i.endTime)
    .forEach(item => {
      const s = new Date(item.startTime).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')
      const e = new Date(item.endTime).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')
      const descParts = []
      if (item.speaker) descParts.push(`Presenter: ${item.speaker}`)
      if (item.paperId) descParts.push(`Paper ID: ${item.paperId}`)
      if (item.details) descParts.push(...item.details)
      lines.push('BEGIN:VEVENT',`UID:mirasol-${item.id}@mirasol-workshop.org`,`DTSTART:${s}`,`DTEND:${e}`,
        `SUMMARY:${esc(item.title)}`,`LOCATION:${esc(LOCATION)}`,
        descParts.length ? `DESCRIPTION:${esc(descParts.join(' | '))}` : null,'END:VEVENT')
    })
  lines.push('END:VCALENDAR')
  return lines.filter(Boolean).join('\r\n')
}

export default function Schedule() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [calOpen, setCalOpen] = useState(false)
  const [nowItem, setNowItem] = useState(null)

  const filtered = scheduleItems.filter(item => {
    const matchFilter = filter === 'all' || item.category === filter
    const q = search.toLowerCase()
    const matchSearch = !q || item.title.toLowerCase().includes(q) || (item.speaker||'').toLowerCase().includes(q)
      || (item.details||[]).some(d => d.toLowerCase().includes(q))
    return matchFilter && matchSearch
  })

  const visibleSections = sections.filter(s => filtered.some(i => i.section === s.id))

  const checkNow = useCallback(() => {
    const now = new Date()
    const current = scheduleItems.find(i => i.startTime !== i.endTime && now >= new Date(i.startTime) && now < new Date(i.endTime))
    setNowItem(current || null)
  }, [])

  function getItemState(item) {
    const now = new Date()
    const start = new Date(item.startTime)
    const end = new Date(item.endTime)
    if (nowItem?.id === item.id) return 'active'
    if (now >= end) return 'past'
    if (now < start) return 'upcoming'
    return 'upcoming'
  }

  useEffect(() => { checkNow(); const id = setInterval(checkNow, 30000); return () => clearInterval(id) }, [checkNow])

  const downloadICS = (e) => {
    e.preventDefault()
    const blob = new Blob([buildICS()], { type: 'text/calendar;charset=utf-8' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'mirasol-workshop-2026.ics'
    document.body.appendChild(a); a.click(); document.body.removeChild(a); setCalOpen(false)
  }

  const openGoogle = (e) => {
    e.preventDefault()
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('MIRASOL Workshop - MICCAI 2026')}&dates=20260927T080000/20260927T180000&ctz=Europe/Paris&location=${encodeURIComponent(LOCATION)}&details=${encodeURIComponent('MIRASOL: Medical Image Computing in Resource Constrained Settings Workshop\n\nFull schedule: '+window.location.href)}`
    window.open(url,'_blank'); setCalOpen(false)
  }

  const openOutlook = (e) => {
    e.preventDefault()
    const url = `https://outlook.live.com/calendar/0/action/compose?subject=${encodeURIComponent('MIRASOL Workshop - MICCAI 2026')}&startdt=${encodeURIComponent('2026-09-27T08:00:00+02:00')}&enddt=${encodeURIComponent('2026-09-27T18:00:00+02:00')}&location=${encodeURIComponent(LOCATION)}&body=${encodeURIComponent('MIRASOL Workshop\n\nFull schedule: '+window.location.href)}`
    window.open(url,'_blank'); setCalOpen(false)
  }

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
    doc.text('Thematic Day Agenda', margin, 66)
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

    doc.save('mirasol-workshop-2026-agenda.pdf')
  }

  return (
    <>
      <PageHeader title="Schedule" />

      {/* Schedule Intro */}
      <div className="content-block">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Thematic Day Agenda</h2>
            <p>All times are in Central European Summer Time (CEST, UTC+2). The workshop takes place at the <strong>Strasbourg Convention Center, France</strong>. Room: <strong>{ROOM}</strong>.</p>
            <p>The MIRASOL poster session is held in the same room, using the wall space around the room.</p>
          </div></div>
          <Countdown variant="schedule" />
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
              <div className="schedule-calendar-sync">
              <button className="schedule-calendar-btn" onClick={()=>setCalOpen(!calOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Add to Calendar
              </button>
              {calOpen && (
                <div className="schedule-calendar-dropdown">
                  <a href="#" className="schedule-calendar-option" onClick={downloadICS}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download .ics file
                    <span className="schedule-calendar-hint">Apple Calendar, Outlook desktop</span>
                  </a>
                  <a href="#" className="schedule-calendar-option" onClick={openGoogle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Google Calendar
                    <span className="schedule-calendar-hint">Opens in Google Calendar</span>
                  </a>
                  <a href="#" className="schedule-calendar-option" onClick={openOutlook}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Outlook Web
                    <span className="schedule-calendar-hint">Opens in Outlook.com</span>
                  </a>
                </div>
              )}
            </div>
            </div>
          </div>

          {nowItem && (
            <div className="schedule-happening-now">
              <span className="schedule-happening-now__pulse" />
              <span className="schedule-happening-now__text">Happening Now</span>
              <span className="schedule-happening-now__title">{nowItem.title}</span>
            </div>
          )}

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
                    const state = getItemState(item)
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
                        <div className={`schedule-tl-item -${state}${item.category==='break'?' -break':''}`}>
                          <div className="schedule-tl-dot">
                            {state === 'active' && <span className="schedule-tl-dot__pulse" />}
                          </div>
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

    </>
  )
}
