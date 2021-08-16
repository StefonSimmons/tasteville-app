import { Route } from "react-router-dom"
import Home from '../screens/Home'
import Foods from '../screens/Foods'
import CreateFood from '../screens/CreateFood'
import EditFood from "../screens/EditFood"
import Flavors from "../screens/Flavors"
import FoodDetail from "../screens/FoodDetail"

export default function Main({user}) {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/foods">
        <Foods user={user} />
      </Route>
      <Route exact path="/foods/:id">
        <FoodDetail/>
      </Route>
      <Route exact path="/create-food">
        <CreateFood user={user}/>
      </Route>
      <Route exact path="/foods/:id/edit">
        <EditFood user={user}/>
      </Route>
      <Route exact path="/flavors">
        <Flavors/>
      </Route>
    </div>
  )
}
