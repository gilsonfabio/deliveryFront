import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import WorkerItem, { Worker } from '../../components/WorkerItem';
import { Link } from 'react-router-dom';

import api from '../services/api';

import newproductIcon from '../../assets/images/icons/newproduct.svg';

import './styles.css';

function WorkersList() {
    const [workers, setWorkers] = useState([]);

    const lojaId = localStorage.getItem('deliveryId');
    const lojaName = localStorage.getItem('deliveryNome');
    const lojaUrl = localStorage.getItem('deliveryUrl');

    useEffect(() => {

        console.log(lojaId);

        api.get(`busworkers/${lojaId}`).then(response => {
            setWorkers(response.data);

            console.log(response.data);
        })
    },[]);

    return(
        <div id="page-products-list" className="container">
            <PageHeader title="Estes são os seus colaboradores cadastrados."></PageHeader>  
             <main>                
                <Link to="/newWorkers" className="cadastro">
                    <img src={newproductIcon} alt="Whatsapp"/>
                    Novo colaborador
                </Link>
                {workers.map((worker: Worker) => {
                    return <WorkerItem key={worker.worId} worker={worker} />;
                })}                           
            </main>  
        </div>
    )
}

export default WorkersList;