import React from 'react'
import "./Login.css"
import Button from '@mui/material/Button';
import { auth, provider } from "./firebase";


function Login() {
    const signIn = () => {
        // sign in...
      auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
      <div className="login__logo">
        <img 
          src="https://tijdvoorspiritualiteit.nl/wp-content/uploads/2018/11/Schoppen-Aas.png"
          alt=""
        />
    </div>
    <Button type="submit" onClick={signIn}>
      Sign In
    </Button>
    </div> 
  );
}

export default Login;