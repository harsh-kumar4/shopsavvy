import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "./firebase";
import logo from "./logo.jpg"

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn =e =>{
        e.preventDefault()

        //some fancy firebase signin
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault()

        //some fancy firebase register
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.messge))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='iml' src={logo}/>
        </Link>
        <div className='loginc'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='loginsi'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the SHOPSAVVY Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='loginrb'>Create your Shopsavvy Account</button>
            </div>
    </div>
  )
}

export default Login