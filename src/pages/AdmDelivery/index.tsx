import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';

import pedidosIcon from '../../assets/images/icons/pedidosIcon.svg';
import administraIcon from '../../assets/images/icons/administraIcon.svg';

import './styles.css';

function AdmDelivery() {
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Administre seus delivers de forma rápida e segura."
                description="Mantenha seus dados sempre atualizados para maior segurança. " 
            />
            <main>
                <div className="buttons-container">
                    <Link to="/products" className="pedidos">
                        <img src={pedidosIcon} alt="Pedidos"/>
                        Produtos
                    </Link>
                    <Link to="/addicionals" className="administra">
                        <img src={administraIcon} alt="Administra"/>
                        Adicionais
                    </Link>
                </div>
                <div className="buttons-container">
                    <Link to="/workers" className="pedidos">
                        <img src={pedidosIcon} alt="Pedidos"/>
                        Usuários
                    </Link>
                    <Link to="/datdelivery" className="administra">
                        <img src={administraIcon} alt="Administra"/>
                        Dados Delivery
                    </Link>
                </div>
                
            </main>
        </div>
    )
}

export default AdmDelivery;
