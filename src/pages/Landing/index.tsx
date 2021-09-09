import React  from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

import logoImg from '../../assets/images/trembao.png';
import landingImg from '../../assets/images/landing.png';
import pedidosIcon from '../../assets/images/icons/pedidosIcon.svg';
import administraIcon from '../../assets/images/icons/administraIcon.svg';
//import foodIcon from '../../assets/images/icons/foodIcon.svg';

function Landing() {
    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');
     
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Trem Bão"/>
                    <h2>Seu administrador de delivery online.</h2>
                </div>
                <img src={landingImg} alt="" className="hero-image" />                
                <div className="buttons-container">
                    <Link to="/pedidos" className="pedidos">
                        <img src={pedidosIcon} alt="Pedidos"/>
                        Pedidos
                    </Link>
                    <Link to="/administra" className="administra">
                        <img src={administraIcon} alt="Administra"/>
                        Administra
                    </Link>
                </div>
                <span className="total-connections">
                    Bemvindo:  {lojaName} 
                </span>
            </div>            
        </div>
    )
}

export default Landing;
