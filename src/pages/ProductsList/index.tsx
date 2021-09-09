import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ProductItem, { Product } from '../../components/ProductItem';
import { Link } from 'react-router-dom';

import api from '../services/api';

import newproductIcon from '../../assets/images/icons/newproduct.svg';

import './styles.css';

function ProductsList() {
    const [products, setProducts] = useState([]);

    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');

    useEffect(() => {

        console.log(lojaId);

        api.get(`products/${lojaId}`).then(response => {
            setProducts(response.data);

            console.log(response.data);
        })
    },[]);

    return(
        <div id="page-products-list" className="container">
            <PageHeader title="Estes são os seus produtos cadastrados."></PageHeader>  
             <main>                
                <Link to="/newProducts" className="cadastro">
                    <img src={newproductIcon} alt="Whatsapp"/>
                    Novo produto
                </Link>
                {products.map((product: Product) => {
                    return <ProductItem key={product.proId} product={product} />;
                })}                           
            </main>  
        </div>
    )
}

export default ProductsList;
