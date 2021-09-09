import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../services/api';

function AdmDelivery() {
    const [proTitulo, setTitle] = useState('');
    const [proSubTitulo, setSubtitle] = useState('');
    const [proDescricao, setDescription] = useState('');
    const [proPrecoBase, setPrice] = useState('');
    const [proUrlphoto, setUrlphoto] = useState('');
    const [proStatus, setStatus] = useState('A');

    const proDeliveryId = localStorage.getItem('deliveryId');

    function handleCreateProducts(e:FormEvent) {
        e.preventDefault();
        
        api.post('newproducts', {
            proDeliveryId,
            proTitulo,
            proSubTitulo,
            proDescricao,
            proPrecoBase: Number(proPrecoBase),
            proUrlphoto,
            proStatus,
        }).then(() => {
            alert('Produto cadastrato com sucesso!')
        }).catch(() => {
            alert('Erro no cadastro!');
        })    
    }

    return(
        <div id="page-products-form" className="container">
            <PageHeader 
                title="Administra dados dos produtos cadastratos."
                description="Mantenha os dados dos produtos sempre atualizados para maior segurança. " 
            />
            <main>
                <form onSubmit={handleCreateProducts}>
                    <fieldset>
                        <legend>Dados dos produto</legend>
                        <Input 
                            name="title" 
                            label="Titulo" 
                            value={proTitulo} 
                            onChange={(e) => {setTitle(e.target.value)}} 
                        />
                        <Input 
                            name="subtitle" 
                            label="Sub-Titulo" 
                            value={proSubTitulo}
                            onChange={(e) => {setSubtitle(e.target.value)}}     
                        />
                        <Textarea 
                            name="description" 
                            label="Descrição"
                            value={proDescricao}
                            onChange={(e) => {setDescription(e.target.value)}} 
                        />
                        <Input 
                            name="price" 
                            label="Preço" 
                            value={proPrecoBase}
                            onChange={(e) => {setPrice(e.target.value)}}    
                        />
                        <Input 
                            name="urlphoto" 
                            label="Url Photo" 
                            value={proUrlphoto}
                            onChange={(e) => {setUrlphoto(e.target.value)}}    
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

export default AdmDelivery;
