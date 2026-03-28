export default function DatesTimeline({ items }) {
  const now = new Date()

  return (
    <div className="dates-timeline">
      {items.map((item, i) => {
        const deadline = item.date ? new Date(item.date) : null
        const isPast = deadline && now > deadline
        return (
          <div key={i} className={`dates-tl-item${isPast ? ' -past' : ''}`}>
            <div className="dates-tl-dot" />
            <div className="dates-tl-card">
              <span className="dates-tl-label">{item.label}</span>
              <span className="dates-tl-value">{item.value}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
