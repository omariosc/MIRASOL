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
    'CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:MIRASOL Workshop 2026','X-WR-TIMEZONE:Asia/Dubai',
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
    const current = scheduleItems.find(i => i.category !== 'break' && now >= new Date(i.startTime) && now < new Date(i.endTime))
    setNowItem(current || null)
  }, [])

  useEffect(() => { checkNow(); const id = setInterval(checkNow, 30000); return () => clearInterval(id) }, [checkNow])

  const downloadICS = (e) => {
    e.preventDefault()
    const blob = new Blob([buildICS()], { type: 'text/calendar;charset=utf-8' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'mirasol-workshop-2026.ics'
    document.body.appendChild(a); a.click(); document.body.removeChild(a); setCalOpen(false)
  }

  const openGoogle = (e) => {
    e.preventDefault()
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('MIRASOL Workshop - MICCAI 2026')}&dates=20261015T080000/20261015T180000&ctz=Asia/Dubai&location=${encodeURIComponent(LOCATION)}&details=${encodeURIComponent('MIRASOL: Medical Image Computing in Resource Constrained Settings Workshop\n\nFull schedule: '+window.location.href)}`
    window.open(url,'_blank'); setCalOpen(false)
  }

  const openOutlook = (e) => {
    e.preventDefault()
    const url = `https://outlook.live.com/calendar/0/action/compose?subject=${encodeURIComponent('MIRASOL Workshop - MICCAI 2026')}&startdt=${encodeURIComponent('2026-10-15T08:00:00+04:00')}&enddt=${encodeURIComponent('2026-10-15T18:00:00+04:00')}&location=${encodeURIComponent(LOCATION)}&body=${encodeURIComponent('MIRASOL Workshop\n\nFull schedule: '+window.location.href)}`
    window.open(url,'_blank'); setCalOpen(false)
  }

  return (
    <>
      <PageHeader title="Schedule" breadcrumb="Schedule" />

      {/* Program at a Glance */}
      <div className="content-block">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Program-at-a-Glance</h2>
            <p><strong>Joint Topic:</strong> Building Inclusive and Efficient AI Technologies for Medical Imaging in Africa and Other Resource-Constrained Settings.</p>
          </div></div>
          <div className="gallery-block-grid -large" style={{marginTop:'1rem'}}>
            <div className="gallery-block-grid__list">
              <div className="gallery-block-grid__item">
                <div className="content-block-image" style={{'--borderRadius':'0.75rem','--aspectRatio':1.5}}>
                  <img src={img('program-schedule.png')} alt="MIRASOL Workshop Program Schedule" className="content-block-image__image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Intro */}
      <div className="content-block">
        <div className="content-block__container">
          <div className="text-block"><div className="rte">
            <h2>Thematic Day Agenda</h2>
            <p>All times are in Gulf Standard Time (GST, UTC+4). The workshop takes place at <strong>ADNEC Centre Abu Dhabi</strong>. Room: TBA.</p>
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
                    Download .ics file
                    <span className="schedule-calendar-hint">Apple Calendar, Outlook desktop</span>
                  </a>
                  <a href="#" className="schedule-calendar-option" onClick={openGoogle}>
                    Google Calendar
                    <span className="schedule-calendar-hint">Opens in Google Calendar</span>
                  </a>
                  <a href="#" className="schedule-calendar-option" onClick={openOutlook}>
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

      {/* Schedule List */}
      <div className="content-block" id="scheduleContainer">
        <div className="content-block__container" style={{paddingTop:0}}>
          {visibleSections.map(sec => (
            <div key={sec.id} className="schedule-section">
              <h3 className="schedule-section__title">{sec.title}</h3>
              {filtered.filter(i => i.section === sec.id).map(item => (
                <div key={item.id} className={`schedule-item${item.category==='break'?' -break':''}${nowItem?.id===item.id?' -happening-now':''}`}>
                  <div className="schedule-time">{formatTime(item.startTime)} &ndash; {formatTime(item.endTime)}</div>
                  <div className="schedule-content">
                    <h4 className={item.category==='break'?'schedule-break-title':''}>{item.title}</h4>
                    {item.speaker && <p className="presenter">{item.speaker}</p>}
                    {item.label && <span className={`session-label ${item.labelClass||''}`}>{item.label}</span>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Event Details */}
      <div className="event-details">
        <div className="event-details__container">
          <div className="event-details__tile">
            <header className="event-details__tile-header"><h2 className="event-details__tile-header-title">Location</h2></header>
            <div className="event-details__tile-body"><div className="event-details__tile-section">
              <p className="event-details__tile-value">ADNEC Centre Abu Dhabi</p>
              <div className="event-details__tile-value"><p>Abu Dhabi, United Arab Emirates</p><p>Room: TBA</p></div>
            </div></div>
          </div>
          <div className="event-details__tile">
            <header className="event-details__tile-header"><h2 className="event-details__tile-header-title">Contact us</h2></header>
            <div className="event-details__tile-body"><div className="event-details__tile-section">
              <p className="event-details__tile-label">If you have any questions, please contact <a href="mailto:info.camera.mri@gmail.com">info.camera.mri@gmail.com</a></p>
            </div></div>
          </div>
        </div>
      </div>
    </>
  )
}
