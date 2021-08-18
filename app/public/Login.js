import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../app'

export default function Login() {
    const auth = useAuth()

    return auth.token ? <Redirect to="/" /> : (
        <form onSubmit={() => auth.setToken('gooo')}>
            <div>
                <label htmlFor="userText">Usuario</label>
                <input type="text" id="userText" />
            </div>
            <div>
                <label htmlFor="passText">Contraseña</label>
                <input type="text" id="passText" />
            </div>
            <button>Ingresar</button>
        </form>
    )
}
