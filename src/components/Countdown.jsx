import { useState, useEffect } from 'react'

const START = new Date('2026-09-27T08:00:00+02:00').getTime()
const END = new Date('2026-09-27T18:00:00+02:00').getTime()

function compute() {
  const now = Date.now()
  if (now >= END) return { state: 'past' }
  if (now >= START) return { state: 'live' }
  const diff = START - now
  return {
    state: 'counting',
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

/**
 * Live countdown to the MIRASOL thematic day (27 Sep 2026).
 * Gracefully switches to a "happening today" and "thank you" state around the
 * event so it never shows a stale or negative timer.
 */
export default function Countdown({ variant = '' }) {
  const [t, setT] = useState(compute)

  useEffect(() => {
    const id = setInterval(() => setT(compute()), 1000)
    return () => clearInterval(id)
  }, [])

  const cls = `countdown${variant ? ` -${variant}` : ''}`

  if (t.state === 'past') {
    return (
      <div className={`${cls} -message`}>
        <span className="countdown__message">Thank you for joining us at MIRASOL 2026 in Strasbourg.</span>
      </div>
    )
  }

  if (t.state === 'live') {
    return (
      <div className={`${cls} -message -live`}>
        <span className="countdown__pulse" />
        <span className="countdown__message">Happening today &mdash; live in Strasbourg.</span>
      </div>
    )
  }

  const units = [
    { value: t.days, label: t.days === 1 ? 'Day' : 'Days' },
    { value: t.hours, label: 'Hrs' },
    { value: t.minutes, label: 'Min' },
    { value: t.seconds, label: 'Sec' },
  ]

  return (
    <div className={cls}>
      <span className="countdown__eyebrow">Counting down to 27 September 2026</span>
      <div className="countdown__units">
        {units.map((u) => (
          <div className="countdown__unit" key={u.label}>
            <span className="countdown__num">{String(u.value).padStart(2, '0')}</span>
            <span className="countdown__unit-label">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
