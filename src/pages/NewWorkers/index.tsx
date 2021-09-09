import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../services/api';

function NewWorkers() {
    const [worName, setWorName] = useState(''); 
    const [worEndereco, setWorEndereco] = useState(''); 
    const [worNumero, setWorNumero] = useState(''); 
    const [worComplemento, setWorComplemento] = useState(''); 
    const [worBairro, setWorBairro] = useState('');
    const [worCidade, setWorCidade] = useState(''); 
    const [worUf, setWorUf] = useState(''); 
    const [worEmail, setWorEmail] = useState(''); 
    const [worWhatsApp, setWorWhatsapp] = useState(''); 
    const [worUsuario, setWorUsuario] = useState(''); 
    const [worSenha, setWorSenha] = useState(''); 
    const [worAvatar, setWorAvatar] = useState('');

    const worDeliveryId = localStorage.getItem('deliveryId');

    function handleCreateProducts(e:FormEvent) {
        e.preventDefault();
        
        api.post('newworkers', {
            worName, 
            worEndereco, 
            worNumero, 
            worComplemento, 
            worBairro,
            worCidade, 
            worUf, 
            worEmail, 
            worWhatsApp, 
            worUsuario, 
            worSenha, 
            worAvatar,
            worDeliveryId,
        }).then(() => {
            alert('Worker cadastrato com sucesso!')
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
                            name="name" 
                            label="Nome" 
                            value={worName} 
                            onChange={(e) => {setWorName(e.target.value)}} 
                        />
                        <Input 
                            name="endereco" 
                            label="Endereço" 
                            value={worEndereco}
                            onChange={(e) => {setWorEndereco(e.target.value)}}     
                        />
                        <Textarea 
                            name="numero" 
                            label="Numero"
                            value={worNumero}
                            onChange={(e) => {setWorNumero(e.target.value)}} 
                        />
                        <Input 
                            name="complemento" 
                            label="Complemento" 
                            value={worComplemento}
                            onChange={(e) => {setWorComplemento(e.target.value)}}    
                        />
                        <Input 
                            name="bairro" 
                            label="Bairro" 
                            value={worBairro}
                            onChange={(e) => {setWorBairro(e.target.value)}}    
                        />
                        <Input 
                            name="cidade" 
                            label="Cidade" 
                            value={worCidade}
                            onChange={(e) => {setWorCidade(e.target.value)}}    
                        />
                        <Input 
                            name="uf" 
                            label="Uf" 
                            value={worUf}
                            onChange={(e) => {setWorUf(e.target.value)}}    
                        />
                        <Input 
                            name="email" 
                            label="Email" 
                            value={worEmail}
                            onChange={(e) => {setWorEmail(e.target.value)}}    
                        />
                        <Input 
                            name="whatsapp" 
                            label="WhatsApp" 
                            value={worWhatsApp}
                            onChange={(e) => {setWorWhatsapp(e.target.value)}}    
                        />
                        <Input 
                            name="usuario" 
                            label="Usuário" 
                            value={worUsuario}
                            onChange={(e) => {setWorUsuario(e.target.value)}}    
                        />
                        <Input 
                            name="senha" 
                            label="Senha" 
                            value={worSenha}
                            onChange={(e) => {setWorSenha(e.target.value)}}    
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar" 
                            value={worAvatar}
                            onChange={(e) => {setWorAvatar(e.target.value)}}    
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

export default NewWorkers;
