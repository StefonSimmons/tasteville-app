import { Link } from "react-router-dom"

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>TasteVille</h1>
        <div>
          <Link to="/login">Login/</Link>
          <Link to="/register">Register</Link>
        </div>
      </header>
      <hr />
      <div>
        <Link to="/foods">Foods</Link>
        <Link to="/flavors">Flavors</Link>
      </div>
      <hr />
      {props.children}
    </div>
  )
}
