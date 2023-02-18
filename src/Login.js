import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='a - Logo 01.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Iniciar Sesión</h1>

                <form>
                    <h5>Correo</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Contraseña</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Iniciar Sesión</button>
                </form>

                <p>
                Al iniciar sesión, acepta las Condiciones de uso de K-MAN. Por favor
                    consulte nuestro Aviso de Privacidad, nuestro Aviso de Cookies y nuestro Aviso de Anuncios Basados ​​en Intereses.
                </p>

                <button onClick={register} className='login__registerButton'>Crear cuenta</button>
            </div>
        </div>
    )
}

export default Login
