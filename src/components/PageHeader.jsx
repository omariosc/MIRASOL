import { Link } from 'react-router-dom'

export default function PageHeader({ title, breadcrumb }) {
  return (
    <header className="page-header">
      <div className="page-header__container">
        <h1 className="page-header__title">{title}</h1>
        {breadcrumb && (
          <p className="page-header__breadcrumb">
            <Link to="/">Home</Link> / {breadcrumb}
          </p>
        )}
      </div>
    </header>
  )
}
