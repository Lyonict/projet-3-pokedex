import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="mb-3 sticky-top">
      <nav className="navbar navbar-expend-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">Home</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link">Pokedex</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
