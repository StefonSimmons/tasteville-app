import './App.css';
import { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Layout from './layout/Layout';
import Main from "./components/Main"
import Register from "./screens/Register"
import Login from "./screens/Login"
import { login, register, verify, logout } from './services/users'

function App() {
  
  const [user, setUser] = useState(null)

  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  })

  const history = useHistory()

  useEffect(() => {
    const reverify = async () => {
      const currentUser = await verify()
      setUser(currentUser)
    }
    reverify()
  },[])

  const handleRegister = async (e) => {
    e.preventDefault()
    const newUser = await register(registerFormData)
    setUser(newUser)
    history.push('/foods')
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const user = await login(loginFormData)
    setUser(user)
    history.push('/foods')
  }

  const handleLogout = () => {
    logout()
    setUser(null)
    history.push("/login")
  }

  return (
    <div>
      <Layout user={user} handleLogout={handleLogout}>
        <Main user={user} />
        <Route exact path="/register">
          <Register
            handleRegister={handleRegister}
            setRegisterFormData={setRegisterFormData}
            registerFormData={registerFormData}
          />
        </Route>
        <Route exact path="/login">
          <Login
            handleLogin={handleLogin}
            setLoginFormData={setLoginFormData}
            loginFormData={loginFormData}
          />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
