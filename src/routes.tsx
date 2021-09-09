import React from 'react';
import { Routes, Route }  from 'react-router-dom';

import Login from './pages/Login';
import Landing from './pages/Landing';
import PedidosList from './pages/PedidosList';
import AdmDelivery from './pages/AdmDelivery';
import DetDelivery from './pages/DetDelivery';
import ProductsList from './pages/ProductsList';
import Adicionais from './pages/AdicionaisList';
import NewProduct from './pages/NewProducts';
import NewAddicional from './pages/NewAdicional';
import WorkersList from './pages/WorkersList';
import Addicionals from './pages/AddicionalsList';

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/pedidos" element={<PedidosList />} />
            <Route path="/administra" element={<AdmDelivery />} />
            <Route path="/detalhes/:comId" element={<DetDelivery />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/adicionais/:proId" element={<Adicionais />} />
            <Route path="/newProducts" element={<NewProduct />} />
            <Route path="/newadicional/:lojaId" element={<NewAddicional />} />
            <Route path="/workers" element={<WorkersList />} />
            <Route path="/addicionals" element={<Addicionals />} />
        </Routes>
    )
}
