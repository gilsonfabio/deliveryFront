import React from 'react';
import { Link } from 'react-router-dom';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import producaoIcon from '../../assets/images/icons/producao.png';

import './styles.css';

export interface Pedido {
    comId: number;
    comDatPedido: string; 
    comHorPedido: string; 
    comIniPreparo: string; 
    comFimPreparo: string; 
    comIniEntrega: string; 
    comFimEntrega: string; 
    comVlrTotal: number; 
    comVlrDesconto: number; 
    comVlrPagar: number; 
    comTipPagto: number; 
    comTroco: number; 
    comUserId: number; 
    comDeliveryId: number; 
    comCourierId: number;
    usrName: string;
}

interface PedidoItemProps {
    pedido: Pedido;    
}

const PedidoItem: React.FC<PedidoItemProps> = ({pedido}) => {    
    return (
        <article className="teacher-item">
            <header>                
                <img src="https://unum.com.br/wp-content/uploads/2019/11/Design-sem-nome-12-442x226.png" alt=""/>
                <div>
                    <strong>{pedido.comId}</strong>
                    <span>{pedido.comDatPedido} - {pedido.comHorPedido}</span>
                    <span>{pedido.comUserId} - {pedido.usrName}</span>
                </div>
            </header>    
            
            <footer>
                <div className="buttons-container">
                    <Link to="/pedidos" className="whatsapp">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em Contato
                    </Link>
                    <Link to={`/detalhes/${pedido.comId}`} className="producao">
                        <img src={producaoIcon} alt="Produção"/>
                        Iniciar Produção
                    </Link>
                </div>
            </footer>
        </article>  
    );
}

export default PedidoItem;