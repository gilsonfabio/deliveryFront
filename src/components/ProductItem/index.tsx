import React from 'react';
import { Link } from 'react-router-dom';

import editappIcon from '../../assets/images/icons/edit.png';
import adicionalIcon from '../../assets/images/icons/fritas.svg';

import './styles.css';

export interface Product {
    proId: number;
    proTitulo: string; 
    proSubTitulo: string; 
    proDescricao: string; 
    proPrecoBase:  number; 
    proStatus: string; 
    proUrlphoto: string;    
}

interface ProductItemProps {
    product: Product;    
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {    
    return (
        <article className="product-item">
            <header>                
                <img src={product.proUrlphoto} alt=""/>
                <div>
                    <strong>{product.proId}</strong>
                    <span>{product.proTitulo}</span>
                    <span>{product.proSubTitulo}</span>
                    <span>{product.proDescricao}</span>
                    <span>{product.proPrecoBase}</span>
                </div>
            </header>    
            
            <footer>
                <div className="buttons-container">
                    <Link to={`/editProducts/${product.proId}`} className="whatsapp">
                        <img src={editappIcon} alt="Whatsapp"/>
                        Editar
                    </Link>
                    <Link to={`/adicionais/${product.proId}`} className="producao">
                        <img src={adicionalIcon} alt="Adicionais"/>
                        Adicionais
                    </Link>
                </div>
            </footer>
        </article>  
    );
}

export default ProductItem;