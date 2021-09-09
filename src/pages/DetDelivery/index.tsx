import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import DetPedido, { Detalhe } from '../../components/DetPedido';
import { useParams } from 'react-router-dom';
import { Expo } from 'expo-server-sdk';


import api from '../services/api';
//import entregaIcon from '../../assets/images/icons/entrega.png';

import './styles.css';
//import { Button } from '@material-ui/core';

export default function DetDelivery() {
    const [pedidos, setPedidos] = useState([]);
    
    const params = useParams();

    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');

    const [tokens, setTokens] = useState([]);
    const staToken = 'A';

    let expo = new Expo({ accessToken: process.env.EXPO_ACCESS_TOKEN });

    //const history = useHistory();

    useEffect(() => {
        var commandId = 2;
        console.log('Pedido Nro:', commandId);
        
        api.get(`commandItems/${commandId}`).then(response => {
            setPedidos(response.data);

            console.log(response.data);
        })

        api.get(`token`).then(resp => {
            let dados = resp.data;
            console.log(dados);            
        })
    },[]);

    async function fimProducao() {

        var data = new Date();
        var hora    = data.getHours();  
        var min     = data.getMinutes();
        var seg     = data.getSeconds();

        const datPreparo = hora + ':' + min + ':' + seg;

        console.log(datPreparo);
        //console.log(nroPedido);

        try {
            const response = await api.post(`fimPreparo/${params}/${datPreparo}`);
            //history.push('/landing');
        } catch (err) {
            alert('Erro ao finalizar produção. Tente novamente.');
        }
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader 
                title="Detalhes do Pedido em Produção.">                
            </PageHeader>  
            <main>
                {pedidos.map((detalhe: Detalhe) => {
                    return <DetPedido key={detalhe.itcId} detalhe={detalhe} />;
                })}    
                <div className="buttons-container">                    
                    <button onClick={fimProducao}>
                        Enviar p/ Entrega
                    </button>
                </div>                           
            </main> 
 
        </div>
    )
}
