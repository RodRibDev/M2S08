import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Signin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();  

    function handleSubmit(e) {
        e.preventDefault();
        if (email === 'admin@admin.com' && senha === 'admin123') {
            // redireciona para a home
            navigate('/home');
            return;
        }

        alert('Email e/ou senha incorretos');
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <img 
                    src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75" 
                    alt="Logo" 
                    className="login-logo"
                />
                <input 
                    type="email" 
                    placeholder='E-mail' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder='Senha' 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                />
                <button type='submit'>Entrar</button>
            </form>
        </>
    );
}

export default Signin;
