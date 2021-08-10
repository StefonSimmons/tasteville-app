import { Route } from "react-router-dom"
import Home from '../screens/Home'
import Foods from '../screens/Foods'
import CreateFood from '../screens/CreateFood'

export default function Main() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/foods">
        <Foods />
      </Route>
      <Route exact path="/foods/create">
        <CreateFood/>
      </Route>
    </div>
  )
}
