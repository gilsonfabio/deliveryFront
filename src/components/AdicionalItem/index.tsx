import React from 'react';
import { Link } from 'react-router-dom';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import producaoIcon from '../../assets/images/icons/producao.png';

import './styles.css';

export interface Adicional {
    adpId: number;
    adpProductId: number; 
    adpAddicionalId: number;   
    addDescricao: string;  
}

interface AdicionalItemProps {
    adicional: Adicional;    
}

const AdicionalItem: React.FC<AdicionalItemProps> = ({adicional}) => {    
    return (
        <article className="product-item">
            <header>                
                <div>
                    <strong>{adicional.adpId}</strong>
                    <span>{adicional.adpAddicionalId} - {adicional.addDescricao}</span>                    
                </div>
            </header>    
            
            <footer>
                <div className="buttons-container">
                    <Link to="/pedidos" className="whatsapp">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em Contato
                    </Link>
                    <Link to={`/adicionais/${adicional.adpId}`} className="producao">
                        <img src={producaoIcon} alt="Produção"/>
                        Adicionais
                    </Link>
                </div>
            </footer>
        </article>  
    );
}

export default AdicionalItem;