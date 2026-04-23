import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { scheduleItems, sections, filterCategories, EVENT_DATE, LOCATION, TIMEZONE } from '../data/schedule'
import { img } from '../utils'

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: TIMEZONE })
}

function buildICS() {
  const lines = [
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//MIRASOL Workshop//Schedule//EN',
    'CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:MIRASOL Workshop 2026','X-WR-TIMEZONE:Europe/Paris',
  ]
  scheduleItems.filter(i => i.category !== 'break').forEach(item => {
    const s = new Date(item.startTime).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')
    const e = new Date(item.endTime).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')
    lines.push('BEGIN:VEVENT',`UID:mirasol-${item.id}@mirasol-workshop.org`,`DTSTART:${s}`,`DTEND:${e}`,
      `SUMMARY:${item.title.replace(/[\\;,]/g,c=>'\\'+c)}`,`LOCATION:${LOCATION.replace(/[\\;,]/g,c=>'\\'+c)}`,
      item.speaker ? `DESCRIPTION:Presenter: ${item.speaker.replace(/[\\;,]/g,c=>'\\'+c)}` : null,'END:VEVENT')
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
    return matchFilter && matchSearch
  })

  const visibleSections = sections.filter(s => filtered.some(i => i.section === s.id))

  const checkNow = useCallback(() => {
    const now = new Date()
    const current = scheduleItems.find(i => now >= new Date(i.startTime) && now < new Date(i.endTime))
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
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('MIRASOL Workshop - MICCAI 2026')}&dates=20261001T080000/20261001T180000&ctz=Europe/Paris&location=${encodeURIComponent(LOCATION)}&details=${encodeURIComponent('MIRASOL: Medical Image Computing in Resource Constrained Settings Workshop\n\nFull schedule: '+window.location.href)}`
    window.open(url,'_blank'); setCalOpen(false)
  }

  const openOutlook = (e) => {
    e.preventDefault()
    const url = `https://outlook.live.com/calendar/0/action/compose?subject=${encodeURIComponent('MIRASOL Workshop - MICCAI 2026')}&startdt=${encodeURIComponent('2026-10-01T08:00:00+02:00')}&enddt=${encodeURIComponent('2026-10-01T18:00:00+02:00')}&location=${encodeURIComponent(LOCATION)}&body=${encodeURIComponent('MIRASOL Workshop\n\nFull schedule: '+window.location.href)}`
    window.open(url,'_blank'); setCalOpen(false)
  }

  return (
    <>
      <PageHeader title="Schedule" />

      {/* Program at a Glance - commented out for now
      <div className="content-block">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Program-at-a-Glance</h2>
            <p><strong>Joint Topic:</strong> Building and Sustaining Efficient Technologies for Medical Imaging in Resource-Constrained Settings.</p>
          </div></div>
          <div style={{marginTop:'1.25rem'}}>
            <a
              href={img('program-schedule.webp')}
              target="_blank"
              rel="noopener noreferrer"
              className="program-schedule-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              View Program Schedule
            </a>
          </div>
        </div>
      </div>
      */}

      {/* Schedule Intro */}
      <div className="content-block">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Thematic Day Agenda</h2>
            <p>All times are in Central European Summer Time (CEST, UTC+2). The workshop takes place in <strong>Strasbourg, France</strong>. Room: TBA.</p>
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
            <div className="schedule-calendar-sync">
              <button className="schedule-calendar-btn" onClick={()=>setCalOpen(!calOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Sync to Calendar
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
              <div className="schedule-timeline">
                {filtered.filter(i => i.section === sec.id).map(item => {
                  const state = getItemState(item)
                  return (
                    <div key={item.id} className={`schedule-tl-item -${state}${item.category==='break'?' -break':''}`}>
                      <div className="schedule-tl-dot">
                        {state === 'active' && <span className="schedule-tl-dot__pulse" />}
                      </div>
                      <div className="schedule-tl-card">
                        <div className="schedule-tl-time">{formatTime(item.startTime)} &ndash; {formatTime(item.endTime)}</div>
                        <h4 className={item.category==='break'?'schedule-break-title':''}>{item.title}</h4>
                        {item.speaker && <p className="presenter">{item.speaker}</p>}
                        {item.label && <span className={`session-label ${item.labelClass||''}`}>{item.label}</span>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}
