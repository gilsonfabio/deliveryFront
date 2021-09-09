import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import AdicionalItem, { Adicional } from '../../components/AdicionalItem';
import { Link, useParams } from 'react-router-dom';

import api from '../services/api';

import './styles.css';

import newAdicionalIcon from '../../assets/images/icons/newproduct.svg';

export default function AdicionaisList()  {
    const params  = useParams();

    const [adicionais, setAdicionais] = useState([]);
    
    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');

    useEffect(() => {
        let productId = params.proId;
        console.log(productId);

        api.get(`addproduct/${productId}`).then(response => {
            setAdicionais(response.data);
            console.log(response.data);
        })
    },[]);

    return(
        <div id="page-products-list" className="container">
            <PageHeader title="Estes são os adicionais do produtos."></PageHeader>  
            <main>
                <Link to="/newaddicional/${productId}" className="cadastro">
                    <img src={newAdicionalIcon} alt="Whatsapp"/>
                    Novo adicional
                </Link>
                {adicionais.map((adicional: Adicional) => {
                    return <AdicionalItem key={adicional.adpId} adicional={adicional} />;
                })}
            </main>  
        </div>
    )
}
