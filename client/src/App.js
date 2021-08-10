import './App.css';
import { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from "./components/Main"
import Register from "./screens/Register"
import { register } from './services/users'

function App() {
  
  const [user, setUser] = useState(null)

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await register(formData)
    setUser(newUser)
    history.push('/foods')
  }

  return (
    <div>
      <Layout user={user}>
        <Main />
        <Route exact path="/register">
          <Register
            handleSubmit={handleSubmit}
            setFormData={setFormData}
            formData={formData}
          />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
