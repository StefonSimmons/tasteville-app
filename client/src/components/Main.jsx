import { Route } from "react-router-dom"
import Home from '../screens/Home'
import Foods from '../screens/Foods'
import CreateFood from '../screens/CreateFood'
import EditFood from "../screens/EditFood"
import Flavors from "../screens/Flavors"

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
      <Route exact path="/foods/:id/edit">
        <EditFood/>
      </Route>
      <Route exact path="/flavors">
        <Flavors/>
      </Route>
    </div>
  )
}
