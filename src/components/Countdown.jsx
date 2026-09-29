export default function Countdown({ variant = '' }) {
  return (
    <div className={`countdown -message${variant ? ` -${variant}` : ''}`}>
      <span className="countdown__message">
        Thank you to everyone who participated in MIRASOL 2026. We hope to see you again next year!
      </span>
    </div>
  )
}
