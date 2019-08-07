import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';

export default function Login({ history }){

  const [userName, setUserName] = useState('');

  function handleSubmit(event){

    event.preventDefault();
    console.log(userName);

    history.push('/main');
  }

  return(
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Digite seu usuário no Github"
          autoFocus
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}