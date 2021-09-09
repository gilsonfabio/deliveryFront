import React from 'react';
import { Link } from 'react-router-dom';

import editappIcon from '../../assets/images/icons/edit.png';
import adicionalIcon from '../../assets/images/icons/fritas.svg';

import './styles.css';

export interface Worker {
    worId: number;
    worName: string; 
    worEndereco: string; 
    worNumero: string;  
    worComplemento: string;  
    worBairro: number; 
    worCidade: number; 
    worUf: string;  
    worEmail: string; 
    worWhatsApp: string; 
    worAvatar: string; 
}

interface WorkerItemProps {
    worker: Worker;    
}

const WorkerItem: React.FC<WorkerItemProps> = ({worker}) => {    
    return (
        <article className="product-item">
            <header>                
                <img src={worker.worAvatar} alt=""/>
                <div>
                    <strong>{worker.worId}</strong>
                    <span>{worker.worName}</span>
                    <span>{worker.worEmail}</span>
                    <span>{worker.worWhatsApp}</span>
                </div>
            </header>    
            
            <footer>
                <div className="buttons-container">
                    <Link to={`/editProducts/${worker.worId}`} className="whatsapp">
                        <img src={editappIcon} alt="Whatsapp"/>
                        Editar
                    </Link>
                    <Link to={`/adicionais/${worker.worId}`} className="producao">
                        <img src={adicionalIcon} alt="Adicionais"/>
                        Adicionais
                    </Link>
                </div>
            </footer>
        </article>  
    );
}

export default WorkerItem;