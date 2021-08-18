import React from 'react'
import {
    Redirect,
    Link
} from 'react-router-dom'
import { useAuth } from '../app'

export default function Dashboard() {
    const auth = useAuth()
    
    return !auth.token ? <Redirect to="/login" /> : (
        <div>
            <h1>Dashboard</h1>
            <Link to="/home">
                Ir al Home
            </Link>

        </div>
    )
}
