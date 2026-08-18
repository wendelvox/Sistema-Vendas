"use client";

import { useState } from "react";
import { Layout } from "@/components";
import { Input } from "@/components";

export const CadastroProdutos = () => {

    const [sku, setSku] = useState<string> ('')
    const [preco, setPreco] = useState <string>('')
    const [nome, setNome] = useState <string>('')
    const [descricao, setDescricao] = useState <string>('')

    const submit = () =>{
        const produto = {
            sku, 
            preco, 
            nome, 
            descricao
        }
        console.log(produto)
    }


    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="columns">
                <Input label="SKU: *" 
                columnClasse="is-half"
                onChange={setSku}
                value={sku}
                id="inputSku"
                 placeholder="Digite o codigo"
                 />

                 <Input label="Preço: *" 
                columnClasse="is-half"
                onChange={setPreco}
                value={preco}
                id="inputPreco"
                 placeholder="Digite o preço do produto"
                 />   
        
            </div>       
       
            <div className="columns">
                <Input label="Nome: *" 
                columnClasse="is-full"
                onChange={setNome}
                value={nome}
                id="inputNome"
                 placeholder="Digite o nome do produto"
                 />  
            </div>

             <div className="field">
                <label className="label" htmlFor="inputDesc">Descrição: *</label>
                <div className="control">
                    <textarea className="textarea" 
                        id="inputDesc" value ={descricao} onChange={ event => setDescricao(event.target.value)}
                        placeholder="Digite a descrição detalhada do produto." />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button 
                     onClick={submit}
                     className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}