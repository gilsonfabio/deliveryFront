import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import AddicionalItem, { Adicional } from '../../components/AdicionalItem';
import { Link } from 'react-router-dom';

import api from '../services/api';

import './styles.css';

import newAdicionalIcon from '../../assets/images/icons/newproduct.svg';

export default function AddicionalsList()  {
    const [adicionais, setAdicionais] = useState([]);
    
    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');

    useEffect(() => {
        api.get(`busaddicionals/${lojaId}`).then(response => {
            setAdicionais(response.data);
            console.log(response.data);
        })
    },[]);

    return(
        <div id="page-products-list" className="container">
            <PageHeader title="Estes são os adicionais do produtos."></PageHeader>  
            <main>
                <Link to={`/newadicional/${lojaId}`} className="cadastro">
                    <img src={newAdicionalIcon} alt="Whatsapp"/>
                    Novo adicional
                </Link>
                {adicionais.map((adicional: Adicional) => {
                    return <AddicionalItem key={adicional.adpId} adicional={adicional} />;
                })}
            </main>  
        </div>
    )
}
