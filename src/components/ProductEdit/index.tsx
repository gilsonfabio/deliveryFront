import React from 'react';
import { Link } from 'react-router-dom';

import editappIcon from '../../assets/images/icons/edit.png';
import adicionalIcon from '../../assets/images/icons/fritas.svg';

import './styles.css';

export interface ProEdit {
    proId: number;
    proTitulo: string; 
    proSubTitulo: string; 
    proDescricao: string; 
    proPrecoBase:  number; 
    proStatus: string; 
    proUrlphoto: string;    
}

interface ProductItemProps {
    product: ProEdit;    
}

const ProductEdit: React.FC<ProductItemProps> = ({product}) => {    
    return (
        <article className="product-item">
            <table className="table">                          
                <tbody>
                    <tr>
                        <td className="id">{product.proId}</td>
                        <td className="title">{product.proTitulo}</td>
                        <td className="subtitle">{product.proSubTitulo}</td>
                        <td className="price">{product.proPrecoBase}</td>                            
                        <td className="btnEdit">
                            <Link to={`/altproduct/${product.proId}`} className="button-edit">
                                Editar
                            </Link>
                        </td>
                        <td className="btnDelete">
                            <button className="button-exclui" onClick={() => {}} type="button">
                                Exclui
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>  
    );
}

export default ProductEdit;