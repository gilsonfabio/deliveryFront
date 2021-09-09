import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ProductEdit, { ProEdit } from '../../components/ProductEdit';

import api from '../services/api';

import './styles.css';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');

    useEffect(() => {
        api.get(`products/${lojaId}`).then(response => {
            setProducts(response.data);
            console.log(response.data);
        })
    },[]);

    return(
        <div id="page-products-list" className="container">
            <PageHeader title="Estes são os seus produtos cadastrados."></PageHeader>  
             <main> 
                <thead>
                    <tr className="header">
                        <td className="id">ID</td>
                        <td className="title">Titulo</td>
                        <td className="subtitle">SubTitulo</td>
                        <td className="price">Preço Base</td>                            
                        <td className="btnEdit">Edita</td>
                        <td className="btnDeleta">Exclui</td>
                    </tr>
                </thead>                
                {products.map((product: ProEdit) => {
                    return <ProductEdit key={product.proId} product={product} />;
                })}                           
            </main>  
        </div>
    )
}

export default ProductsList;