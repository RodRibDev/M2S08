import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/images/logo.webp';

function Signin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email === 'admin@admin.com' && senha === 'admin123') {
      navigate('/home');
      return;
    }

    alert('Email e/ou senha incorretos');
  }

  return (
    <>
    <div>
    <h1>Não to entendendo essa merda !!!!</h1>
    <img 
          src={logo} 
          alt="Logo" 
          className="login-logo"
        />
    </div>
      <form onSubmit={handleSubmit}>
      <img 
          src={logo} 
          alt="Logo" 
          className="login-logo"
        />
        <input 
          type="email" 
          placeholder="Insira seu E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Insira sua Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Signin;
