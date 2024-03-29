import React, { useState } from 'react';
import './Login.css';
import api from '../services/api';
import logo from '../assets/logo.svg';

export default function Login({ history }){

  const [username, setUserName] = useState('');

  async function handleSubmit(event){

    event.preventDefault();

    const response = await api.post('/devs', {
      username
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return(
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev-logo" />
        <input
          placeholder="Digite seu usuário no Github"
          autoFocus
          value={username}
          onChange={event => setUserName(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}