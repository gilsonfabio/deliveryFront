import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import PedidoItem, { Pedido } from '../../components/PedidoItem';
import Input from '../../components/Input';

import api from '../services/api';

import './styles.css';

function PedidosList() {
    const [pedidos, setPedidos] = useState([]);

    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');

    useEffect(() => {
        api.get(`atucommands/${lojaId}`).then(response => {
            setPedidos(response.data);

            console.log(response.data);
        })
    },[]);

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os pedidos em espera.">
                <form action="" id="search-pedidos">
                    <Input name="subject" label="Matéria" /> 
                    <Input name="week_day" label="Dia da Semana" /> 
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>  
            <main>
                {pedidos.map((pedido: Pedido) => {
                    return <PedidoItem key={pedido.comId} pedido={pedido} />;
                })}                           
            </main>  
        </div>
    )
}

export default PedidosList;
