import { Link } from "react-router-dom"

export default function Layout(props) {

  const unauthenticated = (
    <div>
      <Link to="/login">Login/</Link>
      <Link to="/register">Register</Link>
    </div>
  )

  const authenticated = (
    <div>
      <p>{props.user?.username}</p>
      <button>Logout</button>
    </div>
  )

  return (
    <div>
      <header>
        <h1>TasteVille</h1>
        {
          props.user ?
            authenticated
            :
            unauthenticated
        }
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
