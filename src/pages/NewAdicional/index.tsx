import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../services/api';

function NewAdicional() {
    const [addDescricao, setDescricao] = useState('');

    const addDeliveryId = localStorage.getItem('deliveryId');

    function handleCreateProducts(e:FormEvent) {
        e.preventDefault();
        
        api.post('addicionals', {
            addDescricao,
            addDeliveryId
        }).then(() => {
            alert('Produto cadastrato com sucesso!')
        }).catch(() => {
            alert('Erro no cadastro!');
        })    
    }

    return(
        <div id="page-products-form" className="container">
            <PageHeader 
                title="Administra dados dos adicionais cadastratos."
                description="Mantenha os dados dos produtos sempre atualizados para maior segurança. " 
            />
            <main>
                <form onSubmit={handleCreateProducts}>
                    <fieldset>
                        <legend>Dados dos adicionais</legend>
                        <Input 
                            name="descricao" 
                            label="Descricao" 
                            value={addDescricao} 
                            onChange={(e) => {setDescricao(e.target.value)}}
                        />  
                    </fieldset>                    
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default NewAdicional;
