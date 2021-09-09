import React from 'react';
import { Link } from 'react-router-dom';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import entregaIcon from '../../assets/images/icons/entrega.png';

import './styles.css';

export interface Detalhe {
    itcId: number;
    itcCommandId: number; 
    itcProductId: number; 
    itcVlrProduto: number;
    proTitulo: string; 
    proSubTitulo: string; 
    proDescricao: string; 
    proUrlphoto: string; 
    proPrecoBase: number; 
    proStatus: string; 
    proDeliveryId: number; 
}

interface DetalheItemProps {
    detalhe: Detalhe;    
}

const DetPedido: React.FC<DetalheItemProps> = ({detalhe}) => {    
    return (
        <article className="det-pedido">
            <header>                
                <img src={detalhe.proUrlphoto} alt=""/>
                <div>
                    <strong>{detalhe.proTitulo}</strong>
                    <span>{detalhe.proSubTitulo}</span>
                </div>
            </header>    
            <p>
                {detalhe.proDescricao}
                <br /> <br />
                Adicionais:
                <br />
                abacaxi, cebola, cheeder, batata palha                
            </p>
            
        </article>  
    );
}

export default DetPedido;