import React, { FormEvent, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
//import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../services/api';

function NewUsuarios() {
    const [usrName, setUsrName] = useState(''); 
    const [usrEndereco, setUsrEndereco] = useState(''); 
    const [usrNumero, setUsrNumero] = useState(''); 
    const [usrComplemento, setUsrComplemento] = useState(''); 
    const [usrBairro, setUsrBairro] = useState('');
    const [usrCidade, setUsrCidade] = useState(''); 
    const [usrUf, setUsrUf] = useState(''); 
    const [usrEmail, setUsrEmail] = useState(''); 
    const [usrWhatsApp, setUsrWhatsapp] = useState(''); 
    const [usrUsuario, setUsrUsuario] = useState(''); 
    const [usrSenha, setUsrSenha] = useState(''); 
    const [usrAvatar, setUsrAvatar] = useState('');

    //const proDeliveryId = localStorage.getItem('deliveryId');

    function handleCreateProducts(e:FormEvent) {
        e.preventDefault();
        
        api.post('newusuarios', {
            usrName, 
            usrEndereco, 
            usrNumero, 
            usrComplemento, 
            usrBairro,
            usrCidade, 
            usrUf, 
            usrEmail, 
            usrWhatsApp, 
            usrUsuario, 
            usrSenha, 
            usrAvatar,

        }).then(() => {
            alert('Usuário cadastrato com sucesso!')
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
                            value={usrName} 
                            onChange={(e) => {setUsrName(e.target.value)}} 
                        />
                        <Input 
                            name="endereco" 
                            label="Endereço" 
                            value={usrEndereco}
                            onChange={(e) => {setUsrEndereco(e.target.value)}}     
                        />
                        <Textarea 
                            name="numero" 
                            label="Numero"
                            value={usrNumero}
                            onChange={(e) => {setUsrNumero(e.target.value)}} 
                        />
                        <Input 
                            name="complemento" 
                            label="Complemento" 
                            value={usrComplemento}
                            onChange={(e) => {setUsrComplemento(e.target.value)}}    
                        />
                        <Input 
                            name="bairro" 
                            label="Bairro" 
                            value={usrBairro}
                            onChange={(e) => {setUsrBairro(e.target.value)}}    
                        />
                        <Input 
                            name="cidade" 
                            label="Cidade" 
                            value={usrCidade}
                            onChange={(e) => {setUsrCidade(e.target.value)}}    
                        />
                        <Input 
                            name="uf" 
                            label="Uf" 
                            value={usrUf}
                            onChange={(e) => {setUsrUf(e.target.value)}}    
                        />
                        <Input 
                            name="email" 
                            label="Email" 
                            value={usrEmail}
                            onChange={(e) => {setUsrEmail(e.target.value)}}    
                        />
                        <Input 
                            name="whatsapp" 
                            label="WhatsApp" 
                            value={usrWhatsApp}
                            onChange={(e) => {setUsrWhatsapp(e.target.value)}}    
                        />
                        <Input 
                            name="usuario" 
                            label="Usuário" 
                            value={usrUsuario}
                            onChange={(e) => {setUsrUsuario(e.target.value)}}    
                        />
                        <Input 
                            name="senha" 
                            label="Senha" 
                            value={usrSenha}
                            onChange={(e) => {setUsrSenha(e.target.value)}}    
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar" 
                            value={usrAvatar}
                            onChange={(e) => {setUsrAvatar(e.target.value)}}    
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

export default NewUsuarios;
