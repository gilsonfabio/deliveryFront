import React, { FormEvent, useState }  from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './styles.css';

import logoImg from '../../assets/images/trembao.png';
import landingImg from '../../assets/images/landing.png';
import loginIcon from '../../assets/images/icons/login.png';
import foodIcon from '../../assets/images/icons/foodIcon.svg';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    async function handleLogin(e: FormEvent){
        e.preventDefault();
        try {
            const response = await api.get(`signIn/${user}/${password}`)
            localStorage.setItem('deliveryId', response.data.delId);
            localStorage.setItem('deliveryNome', response.data.delNomFantasia);
            localStorage.setItem('deliveryUrl', response.data.delUrlphoto); 
            
            console.log(response.data);

            navigate('/landing');
        } catch (err) {
            alert('Falha no login! Tente novamente.');
        }    
    }

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Trem Bão"/>
                    <h2>Seu administrador de delivery online.</h2>
                </div>
                <img src={landingImg} alt="" className="hero-image" />    
                <form id="login-delivery" onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <div className="input-block">
                        <input 
                            type="password"
                            placeholder="Sua ID"
                            value={user}
                            onChange={e => setUser(e.target.value)} 
                        />
                    </div>     
                    <div className="input-block">
                        <input 
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>  
                    <div className="buttons-container">
                        <Button type="submit">                        
                            Sign In
                        </Button>                    
                    </div>
                </form>                          
                
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={foodIcon} alt="Food Icon"/>
                </span>
            </div>            
        </div>
    )
}

export default Login;