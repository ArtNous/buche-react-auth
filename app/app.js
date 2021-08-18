import React, { createContext, useContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Dashboard from './private/Dashboard'
import Home from './public/Home'
import Login from './public/Login'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

export default function App() {
    const [token, setToken] = useState(null)
    return (
        <AuthContext.Provider value={{
            token, setToken
        }}>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </AuthContext.Provider>
    )
}
