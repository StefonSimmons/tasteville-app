import './App.css';
import {Route} from "react-router-dom"
import Layout from './layout/Layout';
import Home from './screens/Home'
import Foods from './screens/Foods'

function App() {
  return (
    <div>
      <Layout>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/foods">
          <Foods/>
        </Route>
      </Layout>
    </div>
  );
}

export default App;
